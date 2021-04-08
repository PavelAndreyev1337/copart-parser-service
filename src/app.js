const express = require('express')
const path = require('path')
require('dotenv').config()
const logger = require('./utils/logger')
const Database = require('./database')
const carRouter = require('./routes/carRouter')
const requestIp = require('./middlewares/request-ip')
const notFound = require('./middlewares/not-found')
const checkDiskSpace = require('./middlewares/check-disk-space')
const errorHandler = require('./middlewares/error-handler')
const queue = require('express-queue');

new Database(process.env.DB_URI, logger)

const app = express()
app.use(queue({ activeLimit: 2, queuedLimit: -1 }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestIp)
app.use(checkDiskSpace)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', carRouter)
app.use(errorHandler)
app.use(notFound)
app.listen(process.env.PORT, () => {
    logger.info('Server has been started.', { label: 'app', })
})
