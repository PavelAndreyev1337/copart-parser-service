const puppeteer = require('puppeteer')
const SELECTOR = require('../utils/selector')
require('dotenv').config()

class CopartParser {
    constructor(link, selector) {
        this.link = link
        this.selector = selector
    }
    async parse() {
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: process.env.EXEC_PATH,
        })
        const page = await browser.newPage()
        await page.goto(this.link, {
            waitUntil: 'networkidle0',
        })
        const carDetails = await page.evaluate((selector) => {
            let carDetails = {}
            for (const property in selector) {
                carDetails[property] = $(selector[property]).text().trim()
            }
            carDetails.photos = location.host + $(selector.photos).attr('href').substring(1)
            return carDetails
        }, this.selector)
        await browser.close()
        return carDetails
    }
}

(new CopartParser('https://www.copart.com/lot/31731941', SELECTOR)).parse()

module.exports = CopartParser
