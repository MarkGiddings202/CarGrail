// // const userFinance = require('../models/finance');
// // const dbPool = require('../db')

// const getUsersFinances = async (req, res){
//     res.status(200).send('all user finance info');
// }


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




// module.exports = {
//     getUserFinances,
//     getUsersFinances, 
//     updateUserFinances,
//     deleteUserFinances
// }