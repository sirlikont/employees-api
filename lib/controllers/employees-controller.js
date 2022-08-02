const employeesModel = require("../models/employees-model");

function create(ctx) {
  const newEmployee = ctx.request.body;
  employeesModel.employees.push(newEmployee);

  ctx.status = 201;
}

function getAll(ctx) {
  ctx.status = 200;
  ctx.body = employeesModel.employees;
}

function getById(ctx) {
  const id = ctx.params.id;

  ctx.status = 200;
  ctx.body = employeesModel.employees[id];
}

function remove(ctx) {
  const id = ctx.params.id;

  employeesModel.employees.splice(id, 1);

  ctx.status = 200;
}

module.exports = { create, getAll, getById, remove };
