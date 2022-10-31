const express = require("express");
// This creates a pathway from our controllers folder for us to acess fianceController.js file
const financeController = require("../controllers/financeController.js");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();
// gets all finances.
router.get("/", financeController.getUserFinances);
// gets a users specific finance.
// router.get("/:id", financeController.getUserFinances);
// updates a users specific finance.
// router.put("/:id", financeController.getUserFinances);
// deletes a users specific finance.
// router.delete("/:id", financeController.deleteUserFinances);

module.exports = router;
