const logger = require('../utils/logger')

module.exports = (req, resp, next) => {
    req.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const link = req.protocol + '://' + req.get('host') + req.originalUrl
    logger.info('User sent a request', { label: `${req.method} ${link}` })
    next()
}
