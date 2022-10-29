const { Pool } = require("pg");

const pool = new Pool({
  database: "cargrail",
  user: "postgres",
  password: "",
});

module.exports = {
  pool,
};
