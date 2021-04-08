const logger = require('../utils/logger')

module.exports = (req, resp, next) => {
    req.baseUrl = `${req.protocol}://${req.get('host')}`
    req.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    logger.info('User sent a request', { label: req.method + ' ' + req.baseUrl + req.originalUrl })
    next()
}
