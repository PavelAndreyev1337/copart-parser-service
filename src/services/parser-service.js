require('dotenv').config()
const COPART_SELECTOR = require('../utils/copart/selector')
const IAAI_SELECTOR = require('../utils/iaai/selector')
const Parser = require('../parsers')

class ParserService {
    parseCopart(link) {
        return new Parser(
            false,
            process.env.EXEC_PATH,
            link,
            COPART_SELECTOR,
            process.env.COPART_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER
        ).parse()
    }
    parseIaai(link) {
        return new Parser(
            true,
            process.env.EXEC_PATH,
            link,
            IAAI_SELECTOR,
            process.env.IAAI_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER
        ).parse()
    }
}

const parserService = new ParserService()
parserService.parseIaai('https://www.iaai.com/vehicledetails/39544497?tenant=US&RowNumber=1')
parserService.parseCopart('https://www.copart.com/lot/29800151')

module.exports = ParserService
