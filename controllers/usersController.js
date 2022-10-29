const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const dbPool = require("../db");

const getAllUsers = async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).send(users);
};

const getUserById = async (req, res) => {
  const userId = req.id;
  const user = await Users.getUser(userId);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("user not found");
  }
};

// Checks to see if email matches the pattern of common emails
const validateInputs = (email, password) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email.toLowerCase())) return false;
  if (password.length < 8) return false;
  return true;
};


 // Registers user's credentials, adding them to the database using the User model
const registerUser = async (req, res) => {
  try {
    const { email, password, first_name, last_name, expenses, income, savings, budget } = req.body;
    if (!validateInputs(email, password)) {
      throw Error("Invalid Credentials.");
    }
      
    const saltRounds = 7;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUserInfo = { first_name, last_name, email, expenses, income, savings, budget, password: hashedPassword};
    Users.createUser(newUserInfo)
    const token = jwt.sign({ email: email }, process.env.AUTH_KEY);
    res.cookie("token", token).sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};


 //Gives the user a token after verifying user's entered credentials
 const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.getByEmail(email);

    if (!user) {
      return res.status(401).send("User Does Not Exist.");
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);
    console.log(user[0].email)

    if (isValidPassword) {
      const token = jwt.sign({ email: user[0].email }, process.env.AUTH_KEY);
      res.cookie("token", token).status(200).send(JSON.stringify(user[0]));
    }
  } catch (err) {
    res.status(500).send("An error has occured");
    console.log(err)
  }
};

 //Clears the user's cookie containing the token that verifies their identity
 const logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};


const deleteUser = async (req, res) => {
  const userId = req.id;
  const user = await Users.deleteUser(userId);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Deletion Unsuccessful");
  }
};

const updateUser = async (req, res) => {
  const userId = req.id;
  const { first_name, last_name, expenses, savings, income, budget } = req.body;
 
  const user = await Users.updateUser({ id: userId, newFN: first_name, newLN: last_name, newExpenses: expenses, newSavings: savings, newIncome: income, newBudget: budget});
  console.log(userId, 'BLAHHHHH')
  if (user) {
    res.status(200).send("User information successfully updated");
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAllUsers,
  login,
  logout,
  getUserById,
  registerUser,
  deleteUser,
  updateUser
};

