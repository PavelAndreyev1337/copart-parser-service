const checkDiskSpace = require('check-disk-space')
const logger = require('../utils/logger')

module.exports = async (req, resp, next) => {
    const diskSpace = await checkDiskSpace(__dirname)
    if (diskSpace.free / Math.pow(2, 30) <= 1) {
        const message = 'Not enough disk space!'
        logger.error(message, { label: 'storage' })
        resp.send(message)
    } else {
        next()
    }
}
