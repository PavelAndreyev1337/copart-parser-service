const { Schema, model } = require('mongoose')

const copartCarSchema = new Schema({
    lot: String,
    vin: String,
    doc_type: String,
    odometer: String,
    highlights: String,
    seller: String,
    primaryDamage: String,
    secondaryDamage: String,
    estRetailValue: String,
    bodyStyle: String,
    vehicleType: String,
    colors: String,
    engineType: String,
    cylinders: String,
    transmission: String,
    drive: String,
    fuel: String,
    keys: String,
    notes: String,
    currentBid: String,
    location: String,
    saleDate: String,
    saleName: String,
    laneItemGridRow: String,
    lastUpdated: String,
    sourcePhotos: String,
    link: String,
    timestamp: Number,
    downloadPath: String,
    archive: String,
    photos: [String]
})

module.exports = model('CopartCar', copartCarSchema)
