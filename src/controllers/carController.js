const ParserService = require('../services/parser-service')
const logger = require('../utils/logger')

exports.addCopartCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, logger).parseCopart(req.body.link))
}

exports.addIaaiCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, logger).parseIaai(req.body.link))
}
