const pool = require('../db.js')

class Cars {
    static async getAllCars() {
        const database = 'SELECT * FROM cars'
        const dbResults = await pool.query(database)
        return dbResults.rows
    }
}
module.exports = Cars 