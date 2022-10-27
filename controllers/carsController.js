const Cars = require("../models/carsModel");
const dbPool = require("../db");

const getCars = async (req, res) => {
  const cars = await Cars.___();
  res.status(200).send(users);
};

const getSingleCar = async (req, res) => {
    const make = req.params.make;
    const model = req.params.model;
    const car = await Car.___();
    if (car) {
        res.status(200).send(car)
    } else {
        res.status(404).send()
    }
}

module.exports = {
    getCars,
    getSingleCar
}
