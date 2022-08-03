const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;
const router = koaJoiRouter();

const employeesController = require("../controllers/employees-controller");
const employeesSchemas = require("./schemas/employees-schemas");

router.route({
  method: "POST",
  path: "/employees",
  validate: {
    body: employeesSchemas.createSchema,
    type: "json",
  },
  handler: employeesController.create,
});

router.route({
  method: "GET",
  path: "/employees",
  validate: {
    query: employeesSchemas.getAllSchema,
  },
  handler: employeesController.getAll,
});

router.route({
  method: "GET",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.getByIdSchema,
  },
  handler: employeesController.getById,
});

router.route({
  method: "DELETE",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.deleteByIdSchema,
  },
  handler: employeesController.deleteById,
});

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
