// DO YOUR MAGIC
const router = require('express').Router()
const md = require('./cars-middleware')
const Car = require('./cars-model')

router.get('/', async (req, res, next) =>{
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

