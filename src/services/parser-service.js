require('dotenv').config()
const COPART_SELECTOR = require('../utils/copart/selector')
const IAAI_SELECTOR = require('../utils/iaai/selector')
const Parser = require('../parsers')

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

module.exports = ParserService
