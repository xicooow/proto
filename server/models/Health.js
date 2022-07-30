const db = require("../db");

const healthSchema = new db.Schema({
  diagnosis: String,
  cre_date: Date
}, { versionKey: false });

module.exports = db.model("health", healthSchema);
