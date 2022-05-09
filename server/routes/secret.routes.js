const SecretController = require("../controllers/secret.controller");

module.exports = app => {
  app.get("/api/secrets/all", SecretController.findAllSecrets);
  app.get("/api/secrets/bylikes", SecretController.findAllSecretsByLikes);
  app.get("/api/secrets/bycomments", SecretController.findAllSecretsByComments);
  app.get("/api/secrets/:id", SecretController.findOneSingleSecret);
  app.put("/api/secrets/update/:id", SecretController.updateExistingSecret);
  app.post("/api/secrets/new", SecretController.createNewSecret);
  app.delete("/api/secrets/delete/:id", SecretController.deleteAnExistingSecret);
};