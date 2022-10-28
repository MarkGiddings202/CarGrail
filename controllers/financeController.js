
const userFinance = require('../models/financeModel.js');
const dbPool = require('../db')

const getUserFinances = async (req, res) => {
    const id = req.params.id;
    const usersFinances = await Users.getAllFinance(id);
    if (userFinance) {
        res.status(200).send('all user finance info');
    } else {
        res.status(404).send('This request cannot be made')
    }
}


// const getUserFinances = async (req, res) => {
//     const userId = req.params.userId;
//     if (userId) {
//         res.status(200).send("send back user finance obj");
//     } else {
//         res.status(404).send('User does not exist');
//     }
// }

// const updateUserFinances = async (req, res) => {
//     const userId = req.params.userId;
//     if (userId) {
//         res.status(200).send('User info successfully updated');
//     } else {
//         res.status(404).send('User does not exist');
//     }
// }

// const deleteUserFinances = async (req, res) => {
//     const userId = req.params.userId;
//     if (userid) {
//         res.status(204).send('User info successfully deleted.');
//     } else {
//         res.status(404).send('User does not exist');
//     }
// }





module.exports = {
    getUserFinances
    // getUsersFinances, 
    // updateUserFinances,
    // deleteUserFinances
}