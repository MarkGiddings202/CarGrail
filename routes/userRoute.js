const express = require("express");
// This creates a pathway from our controllers folder for us to acess userController.js file
const usersController = require("../controllers/usersController");
const authenticate = require("../auth");
// we use router to get the endpoints of the url's in response of a request from client.
const router = express.Router();

// router.post('pathway', Controllerfunction.QueryFromModel)
router.get("/", usersController.getAllUsers);
router.post("/login", usersController.login);
router.get("/logout", usersController.logout);
// id specifies grabbing data from a db.
router.get("/:id", authenticate, usersController.getUserById);
router.post('/', usersController.registerUser)
router.delete("/:id", authenticate, usersController.deleteUser);
router.put("/", authenticate, usersController.updateUser);

router.all('*', (req, res) => {
    res.send("This user route does not exist")
})

module.exports = router;
