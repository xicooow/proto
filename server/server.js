const app = require("express")();

const APP_PORT = process.env.APP_PORT || 4001;

app.listen(APP_PORT, () => {
  console.log(`Running in port ${APP_PORT}`);
});

require("./router")(app);
