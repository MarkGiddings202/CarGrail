const express = require("express");
// This creates a pathway from our controllers folder for us to acess userController.js file
const usersController = require("../controllers/usersController");
const authenticate = require("../auth");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();

// formula router.METHOD('pathway',(authenticate for validation), Controllerfunction.QueryFromModel)
router.get("/", usersController.getAllUsers);
router.post("/login", usersController.login);
router.get("/logout", usersController.logout);
// id represents a specific point of data from a db.
router.get("/getById", authenticate, usersController.getUserById);
router.post("/", usersController.registerUser);
router.delete("/:id", authenticate, usersController.deleteUser);
router.put("/", authenticate, usersController.updateUser);
// * incase of any unexpected routes.
router.all("*", (req, res) => {
  res.send("This user route does not exist");
});

module.exports = router;
