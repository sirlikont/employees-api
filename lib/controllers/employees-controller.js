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
  const employee = employeesModel.employees[id];

  if (!employee) {
    ctx.status = 404;
    return;
  }

  ctx.status = 200;
  ctx.body = employeesModel.employees[id];
}

function remove(ctx) {
  const id = ctx.params.id;

  employeesModel.employees.splice(id, 1);

  ctx.status = 200;
}

function searchByName(ctx) {
  const name = ctx.query.name;
  const employees = employeesModel.employees.filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );

  ctx.body = employees;
}

function filterEmployees(ctx) {
  const title = ctx.query.title;
  const tribe = ctx.query.tribe;

  const employees = employeesModel.employees.filter(
    (x) =>
      (title ? x.title === title : true) && (tribe ? x.tribe === tribe : true)
  );

  ctx.body = employees;
}

module.exports = {
  create,
  getAll,
  getById,
  remove,
  searchByName,
  filterEmployees,
};
