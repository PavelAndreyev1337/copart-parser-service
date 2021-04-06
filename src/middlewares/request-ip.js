module.exports = (req, resp, next) => {
    req.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next()
}
