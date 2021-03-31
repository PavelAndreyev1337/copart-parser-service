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
            for (const section in selector) {
                for (const property in selector[section])
                    carDetails[property] = $(selector[section][property]).text().trim()
            }
            carDetails.photos = location.host + $(selector.carInformation.photos).attr('href').substring(1)
            return carDetails
        }, this.selector)
        console.log(carDetails)
        await browser.close()
        return carDetails
    }
}

(new CopartParser('https://www.copart.com/lot/36930930/salvage-2002-toyota-highlander-limited-va-danville', SELECTOR)).parse()

module.exports = CopartParser
