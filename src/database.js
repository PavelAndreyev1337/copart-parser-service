const mongoose = require('mongoose')

class Database {
    constructor(logger) {
        this.logger = logger
        this._connect()
    }
    _connect() {
        mongoose.connect('').then(() => {
            this.logger.info('Database connection error.')
        }).catch(err => {
            this.logger.error('Database connection successful.')
        })
    }
}

module.exports = Database
