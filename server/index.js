const app = require("express")();

const APP_PORT = 4001;

app.listen(APP_PORT, () => {
  console.log(`Running in port ${APP_PORT}`);
});

app.get("/health", (_req, res) => {
  res.send({ diagnosis: "alive" });
});
