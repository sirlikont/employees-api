const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;

const createSchema = Joi.object({
  // ...
});

const getAllSchema = Joi.object({
  // ...
});

const getByIdSchema = Joi.object({
  // ...
});

const deleteByIdSchema = Joi.object({
  // ...
});

module.exports = {
  getAllSchema,
  createSchema,
  getByIdSchema,
  deleteByIdSchema,
};
