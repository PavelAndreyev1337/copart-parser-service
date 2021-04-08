const mongoose = require('mongoose')

class Database {
    constructor(dbURI, logger) {
        this.dbURI = dbURI
        this.logger = logger
        this._connect()
    }
    _connect() {
        mongoose.connect(this.dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            this.logger.info('Database connection successful.', { label: 'db', })
        }).catch(err => {
            this.logger.error('Database connection error.', { label: 'db', error: err.message, })
        })
    }
}

module.exports = Database
