const { createLogger, transports } = require('winston');

const infoLogger = createLogger({
    transports: [
        new transports.File({
            filename: './logs/infoLogs.log',
            level: 'info'
        })
    ]
})
infoLogger.stream = {
    write: (message,encoding) => {
        infoLogger.info(message)
    }
}

// console.log("internal consoled:", infoLogger)
module.exports = infoLogger