const { pool } = require("../db.js");

class User {
  static async getAllUsers() {
    const database = "SELECT * FROM users";
    const dbResults = await pool.query(database);
    console.log(dbResults)
    return dbResults.rows;
  }

  static async getUser(id) {
    const database = "SELECT * FROM users where id = $1";
    const dbResults = await pool.query(database, [id]);
    return dbResults.rows;
  }

  static async createUser(data1) {
    const database1 =
      "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING*";
    const dbResults1 = await pool.query(database1, [data1.first_name, data1.last_name, data1.email]);
    const database2 =
      "INSERT INTO finance (expenses, income, savings, budget) VALUES ($1, $2, $3, $4) RETURNING*";
    const dbResults2 = await pool.query(database2, [data1.expenses, data1.income, data1.savings, data1.budget]);
    return dbResults1.rows[0], dbResults2.rows[0];
  }



  static async deleteUser(id) {
    const deleteFinance = await pool.query(
      "DELETE FROM finance WHERE user_id = $1",
      [id]
    );
    const deleteCar = await pool.query("DELETE FROM cars WHERE user_id = $1", [
      id,
    ]);
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);
    return deleteCar.rows;
  }
}

module.exports = User;
