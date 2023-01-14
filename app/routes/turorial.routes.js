module.exports = app => {
  const contactme = require('../controllers/contactme.controller')

  var router = require("express").Router();

  // Create a new conatctme
  router.post("/contactme", contactme.create);

  // Retrieve all contactme
  router.get("/", contactme.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api", router);
};
