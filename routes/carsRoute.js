const express = require("express");
// This creates a pathway from our controllers folder for us to acess carController.js file
const carsController = require("../controllers/carsController");
const authenticate = require("../auth");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();
// gets all cars.
router.get("/", authenticate, carsController.getCars);
router.get("/:carBudgetLowerBound/:carBudgetUpperBound", authenticate, carsController.getBudgetCars);

module.exports = router;
