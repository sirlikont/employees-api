//const employeesModel = require("../models/employees-model");
const employeesModel = require("../models/employees-db-model");

async function create(ctx) {
  const employee = ctx.request.body;
  await employeesModel.create(employee);

  ctx.status = 201;
}

async function getAll(ctx) {
  ctx.status = 200;
  ctx.body = await employeesModel.getAll();
}

async function getById(ctx) {
  const id = ctx.params.id;
  const employee = await employeesModel.getById(id);

  if (!employee) {
    ctx.status = 404;
    return;
  }

  ctx.status = 200;
  ctx.body = employee;
}

async function remove(ctx) {
  const id = ctx.params.id;

  await employeesModel.removeById(id);

  ctx.status = 200;
}

function searchByName(ctx) {
  const name = ctx.query.name;

  if (!name) {
    ctx.status = 400;
    return;
  }

  ctx.status = 200;
  ctx.body = employeesModel.searchByName(name);
}

function filterEmployees(ctx) {
  const title = ctx.query.title;
  const tribe = ctx.query.tribe;

  if (!title && !tribe) {
    ctx.status = 400;
    return;
  }

  ctx.status = 200;
  ctx.body = employeesModel.filterEmployees(title, tribe);
}

function employeesReport(ctx) {
  ctx.status = 200;
  ctx.body = employeesModel.employeeReport();
}

module.exports = {
  create,
  getAll,
  getById,
  remove,
  searchByName,
  filterEmployees,
  employeesReport,
};
