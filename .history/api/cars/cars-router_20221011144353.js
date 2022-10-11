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

router.get('/:id', md.checkCarId, async (req, res, next) =>{
    try{
        const car = await Car.getById(req.params.id)
        res.json(car)
    } catch(err){
        next(err)
    }
})

router.post( '/', md.checkCarPayload, md.checkVinNumberUnique, md.checkVinNumberValid  async (req, res, next) => {
    try{
       const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})


module.exports = router
