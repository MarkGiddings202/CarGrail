const express = require("express");
// This creates a pathway from our controllers folder for us to acess userController.js file
const usersController = require("../controllers/usersController");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();

// router.post('pathway', Controllerfunction.QueryFromModel)
router.get("/", usersController.getUsers);
// id specifies grabbing data from a db.
router.get("/:id", usersController.getUser);
router.post('/', usersController.createUser)
router.delete("/:id", usersController.deleteUser);
router.put("/;id", usersController.getUser);

module.exports = router;
