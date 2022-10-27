const userFinance = require('../models/financeModel.js');
const dbPool = require('../db')
// GET
const getUsersFinances = async (req, res) =>{
    res.status(200).send('all user finance info');
}

// GET 
const getUserFinances = async (req, res) => {
    const userId = req.params.userId;
    if (userId) {
        res.status(200).send("send back user finance obj");
    } else {
        res.status(404).send('User does not exist');
    }
}
// PUT
const updateUserFinances = async (req, res) => {
    const userId = req.params.userId;
    if (userId) {
        res.status(200).send('User info successfully updated');
    } else {
        res.status(404).send('User does not exist');
    }
}
// DELETE
const deleteUserFinances = async (req, res) => {
    const userId = req.params.userId;
    if (userid) {
        res.status(204).send('User info successfully deleted.');
    } else {
        res.status(404).send('User does not exist');
    }
}




module.exports = {
    getUserFinances,
    getUsersFinances, 
    updateUserFinances,
    deleteUserFinances
}