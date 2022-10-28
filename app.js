const express = require('express')
const cors = require('cors')
const usersControllers = require('./controllers/usersController.js')
const financeControllers = require('./controllers/financeController.js')
const carsControllers = require('./controllers/carsController.js')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/users/:id', usersControllers.getUser)
app.listen(PORT,()=>{
    console.log("hi")

})