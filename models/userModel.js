const { pool } = require('../db.js')

class User {

    static async getAllUsers(){
        const database = 'SELECT * FROM users';
        const dbResults = await pool.query(database);
        return dbResults.rows;
    }

    static async getUser(id) {
        const database = 'SELECT * FROM users where id = $1';
        const dbResults = await pool.query(database, [id]);
        return dbResults.rows;
    }





    static async createUser(data1, data2){
        const database1 = 'INSERT INTO user (user, completed) VALUES ($1, false) RETURNING*';
        const dbResults1 = await pool.query(database1, [data1]);
        const database2 = 'INSERT INTO finance (finance, completed) VALUES ($1, false) RETURNING*';
        const dbResults2 = await pool.query(database2, [data2]);
        return dbResults1.rows[0], dbResults2.rows[0];
    }


    // static async createUser(){
    //     const database = `INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`
    //     const dbResults = await pool.query(database,['delvin', 'rey','DEV@gmail.com'])
    //     return dbResults.rows
    // }

    // User.createUser().then(result => console.log(result));


    static async deleteUser(id){
        const deleteFinance = await pool.query('DELETE FROM finance WHERE user_id = $1', [id]);
        const deleteCar = await pool.query('DELETE FROM cars WHERE user_id = $1', [id]);
        const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return deleteCar.rows;
    }
}
    


// User.deleteUser().then(result => console.log(result));
//     static async updateUser(data, id){
//         const database = 'UPDATE user SET user = $1 WHERE id = $2';
//         const dbResults = await pool.query(database, [id]);
//         return dbResults.rows[0];
//     }

module.exports = User;