const tribesModel = require("../models/tribes-model");

async function getAll(ctx) {
  ctx.status = 200;
  ctx.body = await tribesModel.getAll();
}

async function getTribesById(ctx) {
    const id = ctx.params.id;

  
    ctx.status = 200;
    ctx.body = await tribesModel.Model.getTribesById(id)
  }

async function getEmployeesTribeId(ctx) {
  const id = ctx.params.id
  ctx.status = 200;
  ctx.body = await tribesModel.getEmployeesTribeId(id);
}

  module.exports = {
    getAll,
    getTribesById,
    getEmployeesTribeId,
  };
  