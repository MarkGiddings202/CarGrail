
const Cars = require('../models/carsModel.js')
const dbPool = require('../db')

const getCars = async (req, res) => {
    const cars = await Cars.getAllCars();
    res.status(200).send(users)
}

const getBudgetCars = async (req, res) => {
    const lowerBound = req.params.carBudgetLowerBound;
    const upperBound = req.params.carBudgetUpperBound;
    const cars = await Cars.getBudgetCars();
    if (cars) {
        res.status(200).send(cars)

    } else {
        res.status(404).send()
    }
}


module.exports = {
    getCars,
    getBudgetCars
}
