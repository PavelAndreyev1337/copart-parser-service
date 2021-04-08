const COPART_SELECTOR = require('../utils/copart/selector')
const IAAI_SELECTOR = require('../utils/iaai/selector')
const Parser = require('../parsers')
const CopartCar = require('../models/copart-car')
const IaaiCar = require('../models/iaai-car')


class ParserService {
    constructor(ip, baseUrl, logger) {
        this.parser = new Parser(
            ip,
            baseUrl,
            false,
            process.env.EXEC_PATH,
            process.env.DOWNLOAD_RATE_LIMITER,
            logger
        )
    }
    async parseCopart(link, baseUrl) {
        this.parser.baseUrl += '/copart'
        const carDetails = await this.parser.parse(
            link,
            COPART_SELECTOR,
            process.env.COPART_ROOT_DOWNLOAD_PATH
        )
        await new CopartCar(carDetails).save()
        return carDetails
    }
    async parseIaai(link, baseUrl) {
        this.parser.baseUrl += '/iaai'
        const carDetails = await this.parser.parse(
            link,
            IAAI_SELECTOR,
            process.env.IAAI_ROOT_DOWNLOAD_PATH
        )
        await new IaaiCar(carDetails).save()
        return carDetails
    }
}

module.exports = ParserService
