const { Pool } = require('pg')


const pool = new Pool({
    database: 'CarGrail',
    user:     'postgres',
    password: ''
})


module.exports = {
    pool
}
