exports.up = (Knex) =>
  Knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("name");
    table.text("email");
    table.text("password");

    table.timestamp("created_at").default(Knex.fn.now());
    table.timestamp("updated_at").default(Knex.fn.now());
  });

exports.down = (Knex) => Knex.schema.dropTable("users");
