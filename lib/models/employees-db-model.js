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

const TABLE = "employees";

async function create(employee) {
  await knex(TABLE).insert(employee);
}

async function getAll() {
  //return await knex.raw("SELECT * FROM employees");
  return knex(TABLE).select();
}

async function getById(id) {
  return await knex(TABLE).select().where({ id });
}

async function removeById(id) {
  await knex(TABLE).select().where({ id }).del();
}

function searchByName(name) {
  return null;
}

function filterEmployees(title, tribe) {
  return null;
}

function employeeReport() {
  return null;
}

module.exports = {
  create,
  getAll,
  getById,
  removeById,
  searchByName,
  filterEmployees,
  employeeReport,
};
