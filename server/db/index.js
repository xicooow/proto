const mongoose = require("mongoose");

const APP_DB = process.env.APP_DB || "mongodb://localhost:27017";

const main = async () => {
  await mongoose.connect(`${APP_DB}/core`);
};

main().catch(error => {
  console.error(`Failed to connect: ${error}`);
});

module.exports = mongoose;
