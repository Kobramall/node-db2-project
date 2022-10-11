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
  const error = { status: 400}
  const { vin, make, model, mileage } = req.body
  if( vin === undefined){
    error.message = 'missing vin'
  } else if( make === undefined){
    error.message = 'missing make'
  }
  else if(model === undefined){
    error.message = 'missing model'
  }else if( mileage === undefined){
    error.message = 'missing mileage'
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  const error = { status: 400 }
  if(vin < 13 || vin > 13){
    error.message = 'invalid vin'
    next(error)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const existing = await db('cars').where('vin', req.body.vin).first()

    if(existing){
      next({ status: 400, message:'non-unique vin'})
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
