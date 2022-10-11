const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const result = await db('cars')
  return result
}

const getById = async (cars_id) => {
  // DO YOUR MAGIC
  const result = await db('cars').where("cars_id", cars_id)
  return result
}

const create = (car) => {
  // DO YOUR MAGIC
 return db('cars').insert(car)
  
}

module.exports= {
  getAll, getById, create
}