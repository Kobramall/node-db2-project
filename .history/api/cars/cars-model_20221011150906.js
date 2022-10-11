const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const result = await db('cars')
  return result
}

const getById =  (cars_id) => {
  // DO YOUR MAGIC
   return db('cars').where("id", id).first()
  
}

const create = (car) => {
  // DO YOUR MAGIC
 return db('cars').insert(car).then(([id]) => getById(id))
  
}

module.exports= {
  getAll, getById, create
}