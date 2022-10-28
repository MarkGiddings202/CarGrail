const { pool } = require("../db.js");

class User {
  static async getAllUsers() {
    const database = "SELECT * FROM user";
    const dbResults = await pool.query(database);
    console.log(dbResults)
    return dbResults.rows;
  }

  static async getUser(id) {
    const database = "SELECT * FROM users where id = $1";
    const dbResults = await pool.query(database, [id]);
    return dbResults.rows;
  }

  static async createUser(data1 = { first_name: "Gavin", last_name: "Noel", email: "DELVIN@YAHOO.COM" }, data2 = { expenses: 1001, income: 2002, savings: 3003, user_id: 4, budget: 4004 }
  ) {
    const database1 =
      "INSERT INTO user (user, completed) VALUES ($1, false) RETURNING*";
    const dbResults1 = await pool.query(database1, [data1]);
    const database2 =
      "INSERT INTO finance (finance, completed) VALUES ($1, false) RETURNING*";
    const dbResults2 = await pool.query(database2, [data2]);
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
// static async createUser(){
//     const database = `INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`
//     const dbResults = await pool.query(database,['delvin', 'rey','DEV@gmail.com'])
//     return dbResults.rows
// }

// User.createUser().then(result => console.log(result));
//  User.deleteUser().then(result => console.log(result));
//     static async updateUser(data, id) => {
//         const database = 'UPDATE user SET user = $1 WHERE id = $2';
//         const dbResults = await pool.query(database, [id]);
//         return dbResults.rows[0];
//      }

// }
