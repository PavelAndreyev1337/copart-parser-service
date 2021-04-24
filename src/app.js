const express = require('express')
const logger = require('./utils/logger')
const Database = require('./database')
const carRouter = require('./routes/carRouter')
const requestIp = require('./middlewares/request-ip')
const notFound = require('./middlewares/not-found')
const checkDiskSpace = require('./middlewares/check-disk-space')
const errorHandler = require('./middlewares/error-handler')
const cors = require('cors')

new Database(process.env.DB_URI, logger)

const app = express()
app.enable('trust proxy')
app.use(express.json())
app.use(cors({
    origin: process.env.ALLOW_ORIGIN
}))
app.use(express.urlencoded({ extended: true }))
app.use(requestIp)
app.use(checkDiskSpace)
app.use('/', carRouter)
app.use(errorHandler)
app.use(notFound)
app.listen(process.env.PORT, () => {
    logger.info('Server has been started.', { label: 'app', })
})
