module.exports = (req, resp, next) => {
    resp.status(404).send('Not Found')
}
