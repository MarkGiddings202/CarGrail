const { pool } = require("../db.js");

class Cars {
  static async getAllCars() {
    const database = "SELECT * FROM cars";
    const dbResults = await pool.query(database);
    return dbResults.rows;
  }

  static async getBudgetCars(budget) {
    const database = "SELECT * FROM cars WHERE price < $1;";
    const dbResults = await pool.query(database, [budget]);
    return dbResults.rows;
  }
}
module.exports = Cars;
