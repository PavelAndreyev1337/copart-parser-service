const logger = require('../utils/logger')

module.exports = (err, req, resp, next) => {
    const message = 'Something broke!'
    logger.error(message, { label: 'server error', error: err.message })
    resp.status(500).send(message)
}
