const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')
const checkDiskSpace = require('check-disk-space')
const DiskSpaceError = require('../errors/disk-space-error')

class Parser {
    constructor(headless, execPath, link, selector, rootDownloadPath, downloadRateLimiter) {
        this.headless = headless
        this.execPath = execPath
        this.link = link
        this.selector = selector
        this.rootDownloadPath = rootDownloadPath
        this.carDetails = {}
        this.downloadRateLimiter = parseInt(downloadRateLimiter)
    }
    async downloadPhotos(page) {
        this.carDetails.timestamp = Date.now()
        const downloadPath = path.join(this.rootDownloadPath, this.carDetails.timestamp.toString())
        fs.access(downloadPath, async err => {
            if (err) {
                fs.mkdirSync(downloadPath, { recursive: true })
            }
            const diskSpace = await checkDiskSpace(downloadPath)
            if (diskSpace.free / Math.pow(2, 30) >= 2) {
                await page._client.send('Page.setDownloadBehavior', {
                    behavior: 'allow',
                    downloadPath: downloadPath
                })
                for (const stage of this.selector.photos) {
                    await page.click(stage)
                }
                this.carDetails.downloadPath = downloadPath
            } else {
                throw new DiskSpaceError('Not enough disk space on your hard drive.')
            }
        })
    }
    async extractPhotos() {
        fs.readdir(this.carDetails.downloadPath, (err, files) => {
            if (err)
                console.log('Failed to find archive.')
            else {
                this.carDetails.archive = path.join(this.carDetails.downloadPath, files[0])
                const zip = new AdmZip(this.carDetails.archive)
                zip.extractAllTo(this.carDetails.downloadPath)
                this.carDetails.photos = []
                zip.getEntries().forEach(zipEntry => {
                    this.carDetails.photos.push(
                        path.join(this.carDetails.downloadPath, zipEntry.entryName)
                    )
                })
            }
        })
    }
    async parse() {
        const browser = await puppeteer.launch({
            headless: this.headless,
            executablePath: this.execPath,
        })
        const page = await browser.newPage()
        await page.goto(this.link, {
            waitUntil: 'networkidle0',
        })
        this.carDetails = await page.evaluate(async selector => {
            let carDetails = {}
            for (const section in selector) {
                if (!Array.isArray(selector[section])) {
                    for (const property in selector[section]) {
                        carDetails[property] = $(selector[section][property]).text().replace(/\s+/g, " ").trim()
                    }
                }
            }
            const photoLink = $(selector.photos[selector.photos.length - 1]).attr('href').substring(1)
            carDetails.sourcePhotos = `${location.protocol}//${location.host}${photoLink}`
            window.scrollBy(0, window.innerHeight);
            return carDetails
        }, this.selector)
        this.carDetails.link = this.link
        this.downloadPhotos(page)
        setTimeout(async () => {
            this.extractPhotos()
            await browser.close()
            console.log(this.carDetails)
        }, this.downloadRateLimiter)
        return this.carDetails
    }
}

module.exports = Parser
