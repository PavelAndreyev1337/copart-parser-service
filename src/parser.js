const puppeteer = require('puppeteer')
require('dotenv').config()

class CopartParser {
    constructor(link) {
        this.link = link
        this.webDriverPath = process.env.WEB_DRIVER
    }
    async parse() {
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: process.env.WEB_DRIVER,
        })
        const page = await browser.newPage()
        await page.goto(this.link)
        await page.evaluate(() => { 

        })
        await browser.close()
    }
}

(new CopartParser('https://www.copart.com/lot/31731941')).parse()

module.exports = CopartParser
