const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;
const router2 = new KoaJoiRouter();

const tribesController = require("../controllers/tribes-controller");
const tribesSchemas = require("./schemas/tribes-schemas");




router2.route({
    method: "GET",
    path: "/tribes",
    validate: {
        query: tribesSchemas.getAllSchema
    },
    handler: tribesController.getAll,
});


router2.route({
    method: "GET",
    path: "/tribes/:id",
    validate: {
      params: tribesSchemas.byIdSchema,
    },
    handler: tribesController.getTribesById,
  });


  router2.route({
    method: "GET",
    path: "/tribes/:id/employees",
    validate: {
      params: tribesSchemas.byIdSchema,
    },
    handler: tribesController.getEmployeesTribeId,
  });
  
  module.exports = router2;