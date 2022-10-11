const Car = require('./cars-model')
const db = require('../../data/db-config')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
      next({status: 404, message:'id not found'})
    } else {
      req.car = car
      next()
    }
  } catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body.vin) return next({
    status: 400,
    message: 'vin is missing'
  })
  if(!req.body.make)return next({
    status: 400,
    message: 'make is missing'
  })
  if(!req.body.model)return next({
    status: 400,
    message: 'model is missing'
  })
  if(!req.body.mileage)return next({
    status: 400,
    message: 'mileage is missing'
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (vin.validate(req.params.vin)){
    next()
  } else{
    next({ 
      status: 400, 
      message: `vin ${req.params.vin} is invalid`,
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const existing = await db('cars').where('vin', req.body.vin).first()

    if(existing){
      next({ status: 400, message:'vin 11111111111111111 already exists'})
    }else{
      next()
    }
  } catch (err){
    next(err)
  }
}

module.exports = {
  checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid
}
