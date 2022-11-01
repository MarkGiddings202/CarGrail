/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finance").del();
  await knex("users").del();
  await knex("cars").del();
  // creating mock data into database for users table.
  await knex("users").insert([
    {
      first_name: "noel",
      last_name: "fern",
      email: "Noe@gmail.com",
      password: "awldkudgb",
    },
    {
      first_name: "gavin",
      last_name: "gidd",
      email: "GAV@gmail.com",
      password: "kfiojff",
    },
    {
      first_name: "delvin",
      last_name: "rey",
      email: "DEV@gmail.com",
      password: "uhdhydtt",
    },
  ]);
 // creating mock data into database for cars table.
  await knex("cars").insert([
    { brand: "mta", price: 60, model: "metrocard"},
    { brand: "lectricxp", price: 899, model: "eBike"},
    { brand: "volkswagen", price: 7000, model: "tiguan"},
    { brand: "mazda", price: 15000, model: "3"},
    { brand: "nissan", price: 23990, model: "Altima"},
    { brand: "ford", price: 22990, model: "Fusion" },
    { brand: "toyota", price: 30695, model: "camry"},
    { brand: "honda", price: 29500, model: "Accord" },
    { brand: "tesla", price: 135990, model: "s" },
    { brand: "bmw", price: 29500, model: "x" },
    { brand: "rangerover", price: 121500, model: "suv" },
    { brand: "lambo", price: 546847, model: "Aventador"},

  ]);
 // creating mock data into database for finance table.
  await knex("finance").insert([
    {
      expenses: 12000,
      income: 10000,
      savings: 30000,
      user_id: 1,
      budget: 21000,
    },
    {
      expenses: 13000,
      income: 11000,
      savings: 31000,
      user_id: 2,
      budget: 22000,
    },
    {
      expenses: 14000,
      income: 12000,
      savings: 32000,
      user_id: 3,
      budget: 23000,
    },
  ]);
};
