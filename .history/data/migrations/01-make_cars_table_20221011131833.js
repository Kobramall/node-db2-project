
exports.up =  async function (knex) {
  await knex.schema.createTable('cars', table =>{
    table.increments('cars_id')
    table.string('vin')
    table.string('make')
    table.string('model')
    table.numeric('mileage')
    table.string('title')
    table.string('transmission')
  })
};

exports.down =  async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
