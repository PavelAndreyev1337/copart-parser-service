const express = require('express')
const carController = require('../controllers/carController')
const carRouter = express.Router()

carRouter.post('/copart-car', carController.addCopartCar)
carRouter.post('/iaai-car', carController.addIaaiCar)

module.exports = carRouter
