const Koa = require("koa");
const app = new Koa();

const PORT = 3000;

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const logger = require("koa-logger");
app.use(logger());

const router = require("./lib/routes/employees-router");
const router2 = require("./lib/routes/tribes-router");
app.use(router.middleware());
app.use(router2.middleware());

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);

const cors = require('@koa/cors');
app.use(cors());