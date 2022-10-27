const { pool } = require('../db.js')

class User {
    static async getAllUser(){
        const database = 'SELECT * FROM users'
        const dbResults = await pool.query(database)
        return dbResults.rows
    }


    // User.getAllUser().then(result => console.log(result));

    static async createUser(data){
        const database = 'INSERT INTO user (user, completed) VALUES ($1, false) RETURNING*'
        const dbResults = await pool.query(database,[data])
        return dbResults.rows[0]
    }


    // User.createUser().then(result => console.log(result));


    static async deleteUser(id){
        const deleteFinance = await pool.query('DELETE FROM finance WHERE user_id = $1', [id])
        const deleteCar = await pool.query('DELETE FROM cars WHERE user_id = $1', [id])
        const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id])
        return deleteCar.rows

    }
    


// User.deleteUser().then(result => console.log(result));

    static async updateUser(data, id){
        if(!id) throw new Error('an id is required')
        const database = 'UPDATE user SET user = $1 WHERE id = $2'
        const dbResults = await pool.query(database, [id])
        return dbResults.rows[0]

    }

  

}

module.exports = User