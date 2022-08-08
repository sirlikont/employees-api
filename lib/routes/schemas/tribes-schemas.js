const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const getAllSchema = Joi.object({
    name: Joi.string(),
    title: Joi.string(),
    tribe: Joi.string(),
})

const getByIdSchema = Joi.object({
    id: Joi.number().required(),
  });

module.exports = {
    getAllSchema,
    getByIdSchema,
}