const { Pool } = require('pg')


const pool = new Pool({
    database: 'CarGrail',
    user:     '',
    password: ''
})


module.exports = {
    pool
}
