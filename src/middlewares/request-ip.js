const logger = require('../utils/logger')

module.exports = (req, resp, next) => {
    req.baseUrl = `${req.protocol}://${req.get('host')}`
    logger.info('User sent a request', { label: req.method + ' ' + req.baseUrl + req.originalUrl })
    next()
}
