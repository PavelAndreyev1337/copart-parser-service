const ParserService = require('../services/parser-service')
const logger = require('../utils/logger')

exports.addCopartCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, req.baseUrl, logger).parseCopart(req.body.link))
}

exports.addIaaiCar = async (req, resp) => {
    resp.send(await new ParserService(req.ip, req.baseUrl, logger).parseIaai(req.body.link))
}
