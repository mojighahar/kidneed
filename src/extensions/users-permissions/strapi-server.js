const omit = require("lodash/omit");
const routes = require("./routes/routes");
const authController = require("./controllers/auth-controller");

module.exports = (plugin) => {
  plugin.controllers.auth = {
    ...plugin.controllers.auth,
    ...authController,
  };

  plugin.config = omit(plugin.config, "layout");

  plugin.routes["content-api"].routes.push(...routes.routes);
  return plugin;
};
