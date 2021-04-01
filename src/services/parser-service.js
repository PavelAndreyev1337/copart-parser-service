require('dotenv').config()
const COPART_SELECTOR = require('../utils/copart/selector')
const AIIA_SELECTOR = require('../utils/aiia/selector')
const Parser = require('../parser')

class ParserService {
    parseCopart(link){
        return new Parser(
            process.env.EXEC_PATH,
            link,
            COPART_SELECTOR,
            process.env.COPART_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER
        ).parse()
    }
    parseAiia(link) {
        return new Parser(
            process.env.EXEC_PATH,
            link,
            AIIA_SELECTOR,
            process.env.AIIA_ROOT_DOWNLOAD_PATH,
            process.env.DOWNLOAD_RATE_LIMITER
        ).parse()
    }
}

const parserService = new ParserService()
parserService.parseAiia('https://www.iaai.com/vehicledetails/39545187?RowNumber=0')
parserService.parseCopart('https://www.copart.com/lot/29800151')

module.exports = ParserService
