const checkDiskSpace = require('check-disk-space')

module.exports = async (req, resp, next) => {
    const diskSpace = await checkDiskSpace(__dirname)
    if (diskSpace.free / Math.pow(2, 30) <= 1) {
        resp.send('Not enough disk space!')
    } else {
        next()
    }
}
