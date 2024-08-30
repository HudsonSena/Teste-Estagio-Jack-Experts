exports.up = (Knex) =>
  Knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("title");
    table.text("description");

    table.timestamp("created_at").default(Knex.fn.now());
    table.timestamp("updated_at").default(Knex.fn.now());
  });

exports.down = (Knex) => Knex.schema.dropTable("tasks");
