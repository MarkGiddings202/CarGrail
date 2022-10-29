const { pool } = require('../db.js')

class Finance {
    static async getFinanceById(id) {
        const database = 'SELECT * FROM finance WHERE user_id = $1;'
        const dbResults = await pool.query(database, [id])
        return dbResults.rows
    }

    static async getAllFinance() {
        const database = 'SELECT * FROM finance;'
        const dbResults = await pool.query(database)
        return dbResults.rows
    }


    // finance.getAllfinance().then(result => console.log(result));

    static async createFinance(){
    const database = `INSERT INTO finance (expenses, income, savings, user_id, budget) VALUES ($1, $2, $3, $4, $5) RETURNING *`
    const dbResults = await pool.query(database, [12000, 10000, 30000, 2, 21000])
    return dbResults.rows[0]
}

// Finance.createFinance().then(result => console.log(result));

  

}

module.exports = Finance