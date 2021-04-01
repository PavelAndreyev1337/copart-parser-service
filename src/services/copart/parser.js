const puppeteer = require('puppeteer')
const SELECTOR = require('../../utils/copart/selector')
const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')
require('dotenv').config()

class CopartParser {
    constructor(execPath, link, selector, rootDownloadPath) {
        this.execPath = execPath
        this.link = link
        this.selector = selector
        this.rootDownloadPath = rootDownloadPath
        this.carDetails = {}
    }
    async downloadPhotos(page) {
        this.carDetails.timestamp = Date.now()
        const downloadPath = path.join(this.rootDownloadPath, this.carDetails.timestamp.toString())
        fs.mkdir(downloadPath, async err => {
            if (err) {
                console.log('Failed to create directory.')
            } else {
                await page._client.send('Page.setDownloadBehavior', {
                    behavior: 'allow',
                    downloadPath: downloadPath
                })
                await page.click(this.selector.carInformation.photos)
            }
        })
        this.carDetails.photos = downloadPath
    }
    async extractPhotos() {
        fs.readdir(this.carDetails.photos, (err, files) => {
            if (err)
                console.log('Failed to find archive.')
            else {
                const zip = new AdmZip(path.join(this.carDetails.photos, files[0]))
                zip.extractAllTo(this.carDetails.photos)
            }
        })
    }
    async parse() {
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: this.execPath,
        })
        const page = await browser.newPage()
        await page.goto(this.link, {
            waitUntil: 'networkidle0',
        })
        this.carDetails = await page.evaluate(async selector => {
            let carDetails = {}
            for (const section in selector) {
                for (const property in selector[section])
                    carDetails[property] = $(selector[section][property]).text().trim()
            }
            const photoLink = $(selector.carInformation.photos).attr('href').substring(1)
            carDetails.sourcePhotos = `${location.protocol}//${location.host}${photoLink}`
            return carDetails
        }, this.selector)
        this.carDetails.link = this.link
        this.downloadPhotos(page)
        await page.waitFor(5000);
        this.extractPhotos()
        await browser.close()
        console.log(this.carDetails)
        return this.carDetails
    }
}

(new CopartParser(
    process.env.EXEC_PATH,
    'https://www.copart.com/lot/36930930/salvage-2002-toyota-highlander-limited-va-danville',
    SELECTOR,
    process.env.COPART_ROOT_DOWNLOAD_PATH
)).parse()

module.exports = CopartParser
