const healthRoute = require("./routes/HealthRoute");

module.exports = (app) => {
  app.get("/health", healthRoute);
};
