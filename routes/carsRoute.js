const express = require("express");
// This creates a pathway from our controllers folder for us to acess carController.js file
const carsController = require("../controllers/carsController.js");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();
// gets all cars.
router.get("/", carsController.getCars);
// gets a user's specific car.
router.get("/:id", carsController.getSingleCar);

module.exports = router;
