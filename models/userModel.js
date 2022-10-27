const { pool } = require('../db.js')

class User {
    // static async getAllUser(){
    //     const database = 'SELECT * FROM users'
    //     const dbResults = await pool.query(database)
    //     return dbResults.rows
    // }


    // // User.getAllUser().then(result => console.log(result));

    // static async createUser(){
    //     const database = `INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`
    //     const dbResults = await pool.query(database,['delvin', 'rey','DEV@gmail.com'])
    //     return dbResults.rows
    // }

    // User.createUser().then(result => console.log(result));


    static async deleteUser(id){
        // const deleteFinance = await pool.query('DELETE FROM finance WHERE user_id = $1', [id])
        // const deleteCar = await pool.query('DELETE FROM cars WHERE user_id = $1', [id])
        const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id])
        return deleteUser.rows

    }
}
    


// User.deleteUser().then(result => console.log(result));

//     static async updateUser(data, id){
//         if(!id) throw new Error('an id is required')
//         const database = 'UPDATE user SET user = $1 WHERE id = $2'
//         const dbResults = await pool.query(database, [id])
//         return dbResults.rows[0]

//     }

  

// }

// module.exports = User