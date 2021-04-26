const puppeteer = require('puppeteer')
const fs = require('fs').promises
const path = require('path')
const AdmZip = require('adm-zip')
const checkDiskSpace = require('check-disk-space')
const DiskSpaceError = require('../errors/disk-space-error')

class Parser {
    constructor(ip, baseUrl, headless, execPath, downloadRateLimiter, logger) {
        this.ip = ip
        this.baseUrl = baseUrl
        this.headless = headless
        this.execPath = execPath
        this.carDetails = {}
        this.downloadRateLimiter = parseInt(downloadRateLimiter)
        this.logger = logger
    }

    async _downloadPhotos(page) {
        this.logger.info('Started downloading photos.', { label: this.link, ip: this.ip, })
        this.carDetails.timestamp = Date.now()
        const downloadPath = path.join(this.rootDownloadPath, this.carDetails.timestamp.toString())
        try {
            await fs.access(downloadPath)
        } catch (err) {
            this.logger.info('Create folder for photos.', { label: this.link, ip: this.ip, })
            await fs.mkdir(downloadPath, { recursive: true })
        } finally {
            const diskSpace = await checkDiskSpace(downloadPath)
            if (diskSpace.free / Math.pow(2, 30) >= 2) {
                await page._client.send('Page.setDownloadBehavior', {
                    behavior: 'allow',
                    downloadPath: downloadPath,
                })
                for (const selector of this.selector.photos) {
                    await page.waitForSelector(selector)
                    if (await page.$(selector) !== null) {
                        page.click(selector)
                    }
                }
            } else {
                const message = 'Not enough disk space on your hard drive.'
                this.logger.info(message, { label: this.link, ip: this.ip, })
                throw new DiskSpaceError(message)
            }
        }
        return downloadPath
    }
    async _extractPhotos(downloadPath) {
        this.logger.info('Started extracting photos.', { label: this.link, ip: this.ip, })
        try {
            const files = await fs.readdir(downloadPath)
            const zip = new AdmZip(path.join(downloadPath, files[0]))
            const publicUrl = `${this.baseUrl}/img/${this.carDetails.timestamp}/`
            this.carDetails.archive = publicUrl + files[0]
            zip.extractAllTo(downloadPath)
            this.carDetails.photos = []
            zip.getEntries().forEach(zipEntry => {
                this.carDetails.photos.push(
                    publicUrl + zipEntry.entryName
                )
            })
        } catch (err) {
            const message = 'Failed to find archive.'
            this.logger.error(message, { label: this.link, ip: this.ip, })
            throw new Error(message)
        }
    }

    async parse(link, selector, rootDownloadPath) {
        this.link = link
        this.selector = selector
        this.rootDownloadPath = rootDownloadPath
        this.logger.info('Started parsing.', { label: this.link, ip: this.ip, })
        try {
            this.browser = await puppeteer.launch({
                headless: this.headless,
                executablePath: this.execPath,
            })
            const page = await this.browser.newPage()
            await page.goto(this.link, {
                waitUntil: 'networkidle0',
            })
            this.carDetails = await page.evaluate(async selector => {
                let carDetails = {}
                for (const section in selector) {
                    if (!Array.isArray(selector[section])) {
                        for (const property in selector[section]) {
                            carDetails[property] = $(selector[section][property]).text().replace(/\s+/g, " ").trim()
                            if (property === 'title') {
                                const titleParts = $(selector[section][property]).text().split(/\s+/g)
                                for (i = 0; i < titleParts.length; i++) {
                                    if (i === 0) {
                                        carDetails.year = titleParts[i]
                                    } else if (i === 1) {
                                        carDetails.make = titleParts[i]
                                    } else {
                                        if (!carDetails.hasOwnProperty('model')) {
                                            carDetails.model = ''
                                        }
                                        carDetails.model += `${titleParts[i]} `
                                    }
                                }
                                carDetails.model.trimEnd()
                            }
                        }
                    }
                }
                const photoLink = $(selector.photos[selector.photos.length - 1]).attr('href').substring(1)
                carDetails.sourcePhotos = `${location.protocol}//${location.host}/${photoLink}`
                window.scrollBy(0, window.innerHeight);
                return carDetails
            }, this.selector)
            this.carDetails.link = this.link
            const downloadPath = await this._downloadPhotos(page)
            await page.waitForTimeout(this.downloadRateLimiter)
            await this._extractPhotos(downloadPath)
        } catch (error) {
            const message = 'Parsing failed.'
            this.logger.error(message, {
                label: this.link,
                ip: this.ip,
                error: error.message,
            })
            throw new Error(message)
        } finally {
            await this.browser.close()
        }
        return this.carDetails
    }
}

module.exports = Parser
