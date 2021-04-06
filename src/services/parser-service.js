const COPART_SELECTOR = require('../utils/copart/selector')
const IAAI_SELECTOR = require('../utils/iaai/selector')
const Parser = require('../parsers')
const CopartCar = require('../models/copart-car')
const IaaiCar = require('../models/iaai-car')


class ParserService {
    constructor(ip, logger) {
        this.ip = ip
        this.logger = logger
    }
    async parseCopart(link) {
        const carDetails = await new Parser(
            this.ip,
            false,
            process.env.EXEC_PATH,
            link,
            COPART_SELECTOR,
            process.env.COPART_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER,
            this.logger
        ).parse()
        await new CopartCar(carDetails).save()
        return carDetails
    }
    async parseIaai(link) {
        const carDetails = await new Parser(
            this.ip,
            false,
            process.env.EXEC_PATH,
            link,
            IAAI_SELECTOR,
            process.env.IAAI_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER,
            this.logger
        ).parse()
        await new IaaiCar(carDetails).save()
        return carDetails
    }
}

module.exports = ParserService
