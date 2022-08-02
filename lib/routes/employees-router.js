const Router = require("@koa/router");
const router = new Router();

const employeesController = require("../controllers/employees-controller");

router.get("/employees", employeesController.getAll);
router.post("/employees", employeesController.create);
router.get("/employees/:id", employeesController.getById);
router.delete("/employees/:id", employeesController.remove);

module.exports = router;
