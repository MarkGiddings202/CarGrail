/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('finance').del()
  await knex('users').del()
  await knex('cars').del()
  
  
  
  await knex('users').insert([
    {first_name: 'noel', last_name: 'fern', email: 'Noe@gmail.com' },
    {first_name: 'gavin', last_name: 'gidd', email: 'GAV@gmail.com' },
    {first_name: 'delvin', last_name: 'rey', email: 'DEV@gmail.com' }
  ]);
  
  await knex('cars').insert([
    {user_id: 1, brand: 'ford', prices: 20000},
    {user_id: 2, brand: 'honda', prices: 30000},
    {user_id: 3, brand: 'lambo', prices: 2000000}
  ]);
  
  
  await knex('finance').insert([
    {expenses: 12000, income: 10000, savings: 30000, user_id: 1, budget: 21000},
    {expenses: 13000, income: 11000, savings: 31000, user_id: 2, budget: 22000},
    {expenses: 14000, income: 12000, savings: 32000, user_id: 3, budget: 23000}
  ]);
  
};
