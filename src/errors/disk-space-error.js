class DiskSpaceError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = DiskSpaceError