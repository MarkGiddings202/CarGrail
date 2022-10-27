// const Users = require('../models/usersModel')
// const dbPool = require('../db')

// const getUsers = async (req, res) => {
//     const users = await Users.___();
//     res.status(200).send(users)
// }

// const getUser = async (req, res) => {
//     const userId = req.params.id;
//     const user = await Users.___();

//     if (user) {
//         res.status(200).send(user)
//     } else {
//         res.status(404).send("user not found")
//     }
// }

// const deleteUser = async (req, res) => {
//     const userId = req.params.id; 
//     if (userId) {
//         res.status(200).send('User Deleted');
//     } else {
//         res.status(404).send();
//     }
// }

// const updateUserInfo = async (req, res) => {
//     const userId = req.params.id;
//     if (userId) {
//         res.status(200).send('User information successfully updated');
//     } else {
//         res.status(404).send();
//     }
// }



// module.exports = {
//     getUsers,
//     getUser,
//     deleteUser, 
//     updateUserInfo
// }