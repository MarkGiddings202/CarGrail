/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("finance", function (table) {
    table.integer("expenses").notNullable();
    table.integer("income").notNullable();
    table.integer("user_id");
    table.foreign("user_id").references("id").inTable("users");
    table.integer("savings").notNullable();
    table.integer("budget").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("finance");
};
