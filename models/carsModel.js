
const { pool } = require('../db.js')

class Cars {
    static async getAllCars() {
        const database = 'SELECT * FROM cars;'
        const dbResults = await pool.query(database)
        return dbResults.rows
    }

    //needs more work. Insert lower and upper bounds based on our financial metrics. 
    static async getBudgetCars(userCarBudgetRangeLowerBound, userCarBudgetRangeUpperBound) {
        const database = 'SELECT * FROM cars WHERE price > $1 AND price < $2;'
        const dbResults = await pool.query(database, [userCarBudgetRangeLowerBound, userCarBudgetRangeUpperBound]);
        return dbResults.rows
    }




}
module.exports = Cars 