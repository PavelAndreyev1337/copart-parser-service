const ParserService = require('../services/parser-service')
const logger = require('../utils/logger')

exports.addCopartCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, logger).parseCopart('https://www.copart.com/lot/33958431'))
}

exports.addIaaiCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, logger).parseIaai('https://www.iaai.com/vehicledetails/39604543'))
}
