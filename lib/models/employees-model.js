
const { knex } = require("../../db/knex");
const redis = require("../../redis/redis");


const TABLE_NAME = "employees";
const EMPLOYEES_REPORT_CACHE_KEY = "employeesReport";


async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
  await redis.del(EMPLOYEES_REPORT_CACHE_KEY);
}

async function getAll(name, title, tribe) {
  //const query = knex(TABLE_NAME).select('employees.name', 'employees.title', 'tribes.name as tribe').innerjoin('tribes', 'employees.tribe_id', 'tribes.id') ;
  const query = await knex(TABLE_NAME).select('employees.name', 'employees.title', 'tribes.name as tribe').innerJoin('tribes', 'employees.tribe_id',"=", 'tribes.id');

  if (name) query.whereILike("employees.name", `%${name}%`);
  if (title) query.where({ 'employees.title': title});
  if (tribe) query.where({ 'tribes.name': tribe });

  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
  await redis.del(EMPLOYEES_REPORT_CACHE_KEY);
}

async function employeeReport() {
  const cache = await redis.get(EMPLOYEES_REPORT_CACHE_KEY);
  if (cache) {
    return JSON.parse(cache)
  }

  //const employeesArray = await knex(TABLE_NAME).select("employees.name", 'employees.title', 'tribes.name as tribe').innerJoin('tribes', 'employees.tribe_id', 'tribes.id')
  const employeesArray = await knex(TABLE_NAME).select('employees.name', 'employees.title', 'tribes.name as tribe').innerJoin('tribes', 'employees.tribe_id',"=", 'tribes.id');
  const report = {};
  for (employee of employeesArray) {
    console.log(employeesArray);
    if (employee.tribe in report) {
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    } else {
      report[employee.tribe] = [];
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    }
  }
  
  await redis.set(EMPLOYEES_REPORT_CACHE_KEY, JSON.stringify(report));

  return report;

}

async function deleteCache() {
  await redis.del(EMPLOYEES_REPORT_CACHE_KEY);
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeeReport,
  deleteCache,
};
