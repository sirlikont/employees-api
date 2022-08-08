const { knex } = require("../../db/knex");

const TABLE_TRIBES = "tribes";

async function getAll() {
    return await knex(TABLE_TRIBES).select('name', 'area');
}

async function getTribesById(id) {
    return await knex(TABLE_TRIBES).select().where({ id });
  }
    
async function getEmployeesTribeId(id) {
    const query = knex(TABLE_TRIBES).select('tribes.name as tribe', 'employees.name', 'employees.title').innerJoin('employees', 'tribes.id', 'employees.tribe_id');
    if (id) query.where({ 'tribes.id': id });
    return await query;
}

  module.exports = {
    getAll,
    getTribesById,
    getEmployeesTribeId
  };