const express = require('express')
const carController = require('../controllers/carController')
const carRouter = express.Router()

carRouter.get('/copart-car',carController.addCopartCar)
carRouter.get('/iaai-car',carController.addIaaiCar)

module.exports = carRouter
