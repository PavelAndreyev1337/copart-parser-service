const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, colorize, printf } = format;
require('winston-daily-rotate-file')

const transport = new transports.DailyRotateFile({
    dirname: 'src/logs',
    filename: 'parser-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d'
})

const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint(),
    ),
    transports: [
        transport,
    ],
})

const colorizer = colorize();

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(
            printf(msg =>
                colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level} ${msg.label}: ${msg.message}`)
            )
        ),
    }))
}

module.exports = logger
