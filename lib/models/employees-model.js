const Knex = require("knex");

const knexConfig = {
  client: "mysql2",
  version: "8.0",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees",
  },
};

const knex = Knex(knexConfig);

const TABLE_NAME = "employees";

async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, title, tribe) {
  throw "Not implemented";
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

function employeeReport() {
  throw "Not implemented";
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeeReport,
};
