/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id").primary();
        table.integer("prices").notNullable();
        table.text("brand").notNullable();
        table.integer("user_id");
        table.foreign("user_id").references("id").inTable("user");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("cars");
};
