const { Schema, model } = require('mongoose')

const iaaiCarSchema = new Schema({
    title: String,
    year: String,
    make: String,
    model: String,
    stock: String,
    sellingBranch: String,
    vin: String,
    status: String,
    loss: String,
    primaryDamage: String,
    secondDamage: String,
    titleSaleDoc: String,
    startCode: String,
    key: String,
    odometer: String,
    airbags: String,
    vinStatus: String,
    vehicle: String,
    bodyStyle: String,
    engine: String,
    transmission: String,
    driverLineType: String,
    fuelType: String,
    cylinders: String,
    restraintSystem: String,
    exteriorInterior: String,
    options: String,
    manufacturedIn: String,
    vehicleClass: String,
    model: String,
    series: String,
    buyNowPrice: String,
    startingBid: String,
    currentBid: String,
    vehicleLocation: String,
    auctionDateAndTime: String,
    laneRun: String,
    aisleStall: String,
    actualCashValue: String,
    seller: String,
    estimatedRepairCost: String,
    titleSaleDocBrand: String,
    sourcePhotos: String,
    link: String,
    timestamp: Number,
    archive: String,
    photos: [String],
})

iaaiCarSchema.set('timestamps', true)

module.exports = model('IaaiCar', iaaiCarSchema)
