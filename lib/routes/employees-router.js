const koaJoiRouter = require("koa-joi-router");
const router = koaJoiRouter();

const employeesController = require("../controllers/employees-controller");
const employeesSchemas = require("./schemas/employees-schemas");

router.get("/employees", employeesController.getAll);

router.route({
  method: "POST",
  path: "/employees",
  validate: {
    body: employeesSchemas.createSchema,
    type: "json",
  },
  handler: employeesController.create,
});

router.get("/employees/:id", employeesController.getById);
router.delete("/employees/:id", employeesController.remove);

router.get("/search/employees", employeesController.searchByName);
router.get("/filter/employees", employeesController.filterEmployees);

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
