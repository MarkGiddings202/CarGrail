const { pool } = require("../db.js");

class User {
  static async getAllUsers() {
    const database = "SELECT * FROM users";
    const dbResults = await pool.query(database);
    return dbResults.rows;
  }

  static async getUser(id) {
    const database = "SELECT * FROM users where id = $1";
    const database2 = "SELECT * FROM finance WHERE user_id = $1";
    const dbResults2 = await pool.query(database2, [id]);
    const dbResults = await pool.query(database, [id]);
    return {...dbResults2.rows[0], ...dbResults.rows[0]};
  }

  static async getByEmail(email) {
    const database = "SELECT * FROM users where email = $1";
    const dbResults = await pool.query(database, [email]);
    return dbResults.rows[0];
  }

  static async createUser(data1) {
    const database1 =
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING*";
    const dbResults1 = await pool.query(database1, [
      data1.first_name,
      data1.last_name,
      data1.email,
      data1.password,
    ]);
    const { id } = await this.getByEmail(data1.email);

    const database2 =
      "INSERT INTO finance (expenses, income, savings, budget, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING*";
    const dbResults2 = await pool.query(database2, [
      data1.expenses,
      data1.income,
      data1.savings,
      data1.budget,
      id,
    ]);
    return dbResults1.rows[0], dbResults2.rows[0];
  }

  static async updateUser({
    id,
    first_name,
    last_name,
    expenses,
    income,
    savings,
    budget,
  }) {
    const databaseQuery1 =
      "UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING*";
    const databaseQuery2 =
      "UPDATE finance SET expenses = $1, income = $2, savings = $3, budget = $4 WHERE user_id = $5 RETURNING*";
    await pool
      .query(databaseQuery1, [first_name, last_name, id])
      .then((results) => results.rows[0]);
    return await pool.query(databaseQuery2, [
      expenses,
      income,
      savings,
      budget,
      id,
    ]);
  }

  static async deleteUser(id) {
    const deleteFinance = await pool.query(
      "DELETE FROM finance WHERE user_id = $1",
      [id]
    );
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);
    return deleteUser.rows[0];
  }
}

module.exports = User;
