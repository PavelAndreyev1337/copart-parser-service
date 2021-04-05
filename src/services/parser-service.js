require('dotenv').config()
const COPART_SELECTOR = require('../utils/copart/selector')
const IAAI_SELECTOR = require('../utils/iaai/selector')
const Parser = require('../parsers')
const logger = require('../utils/logger')

class ParserService {
    constructor(ip, logger) {
        this.ip = ip
        this.logger = logger
    }
    parseCopart(link) {
        return new Parser(
            this.ip,
            false,
            process.env.EXEC_PATH,
            link,
            COPART_SELECTOR,
            process.env.COPART_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER,
            this.logger
        ).parse()
    }
    parseIaai(link) {
        return new Parser(
            this.ip,
            false,
            process.env.EXEC_PATH,
            link,
            IAAI_SELECTOR,
            process.env.IAAI_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER,
            this.logger
        ).parse()
    }
}

const parserService = new ParserService(1, logger)
parserService.parseIaai('https://www.iaai.com/vehicledetails/38823872?tenant=US&RowNumber=0')
parserService.parseCopart('https://www.copart.com/lot/29800151')

module.exports = ParserService
