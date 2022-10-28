const Users = require("../models/userModel.js");
const dbPool = require("../db");

const getUsers = async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).send(users);
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await Users.getUser(userId);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("user not found");
  }
};


const createUser = async (req, res) => {
  const newUserInfo1 = { first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, expenses: req.body.expenses, income: req.body.income, savings: req.body.savings, user_id: req.body.savings, budget: req.body.budget };
  const newUser = await Users.createUser(newUserInfo1);
  if (newUser) {
    res.status(200).send(newUser);
  } else {
    res.status(404).send('Invalid Entry')
  }
}

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await Users.deleteUser(userId);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Deletion Unsuccessful");
  }
};

const updateUserInfo = async (req, res) => {
  const userId = req.params.id;
  const userInfo1 = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
  };
  const userInfo2 = {
    expenses: req.body.expenses,
    income: req.body.income,
    savings: req.body.savings,
    user_id: req.body.savings,
    budget: req.body.budget,
  };
  const user = await Users.updateUser(userInfo1, userInfo2, userId);

  if (user) {
    res.status(200).send("User information successfully updated");
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUserInfo,
};

