const { Schema, model } = require('mongoose')

const copartCarSchema = new Schema({
    title: String,
    year: String,
    make: String,
    model: String,
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
    archive: String,
    photos: [String],
})

copartCarSchema.set('timestamps', true)

module.exports = model('CopartCar', copartCarSchema)
