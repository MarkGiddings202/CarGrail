const Finance = require("../models/financeModel");

const getUsersFinance = async (req, res) => {
    //console.log(Finance.getAllFinance)
    const usersFinances = await Finance.getAllFinance();
    if (usersFinances) {
        res.status(200).send(usersFinances);
    } else {
        res.status(404).send('This request cannot be made')
    }
}


const getUserFinancesID = async (req, res) => {
    const { id } = req.params;
    const userFinances = await Finance.getFinanceById(id);
    if (id) {
        res.status(200).send(userFinances);
    } else {
        res.status(404).send('User does not exist');
    }
}

const updateUserFinances = async (req, res) => {
    const userId = req.params.userId;
    if (userId) {
        res.status(200).send('User info successfully updated');
    } else {
        res.status(404).send('User does not exist');
    }
}

// const deleteUserFinances = async (req, res) => {
//     const { id } = req.params;
//     await Finance.getFinanceById(id);
//     const userFinances = await Finance.getFinanceById(id);
//     if (!userFinances) {
//         res.status(204).send('deleted finances');
//     } else {
//         res.status(404).send('User does not exist');
//     }
// }





module.exports = {
    getUserFinancesID,
    getUsersFinance, 
    updateUserFinances,
    //deleteUserFinances
}