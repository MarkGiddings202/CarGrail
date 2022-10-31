const Cars = require("../models/carsModel.js");
const dbPool = require("../db");

const getCars = async (req, res) => {
  const cars = await Cars.getAllCars();
  res.status(200).send(cars);
};

const getBudgetCars = async (req, res) => {
  const { budget } = req.body;
  const cars = await Cars.getBudgetCars(budget);
  if (cars.length > 0) {
    res.status(200).send(cars);
  } else {
    res.status(404).send([]);
  }
};

module.exports = {
  getCars,
  getBudgetCars,
};
