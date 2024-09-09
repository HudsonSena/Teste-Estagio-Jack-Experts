const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const knex = require("../database/knex");

class TasksController {
  async create(request, response) {
    const user_id = request.user.id;
    const { title, description } = request.body;
    const database = await sqliteConnection();

    const checkTitleExist = await database.get(
      "SELECT * FROM tasks WHERE title = (?) AND user_id = (?)",
      [title, user_id]
    );

    if (checkTitleExist) {
      throw new AppError("Título ja cadastrado");
    }

    await knex("tasks").insert({
      title,
      description,
      user_id,
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const user_id = request.user.id;
    const { title, description } = request.body;
    const { id } = request.params;
    const database = await sqliteConnection();
    const task = await database.get("SELECT * FROM tasks WHERE id = (?)", [id]);

    if (!task) {
      throw new AppError("Tarefa não encontrada");
    }

    const taskWithUpdatedTitle = await database.get(
      "SELECT * FROM tasks WHERE title = (?) AND user_id = (?) AND id != (?)",
      [title, user_id, id]
    );

    if (taskWithUpdatedTitle) {
      throw new AppError("Este título já está em uso por outra tarefa");
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;

    await database.run(
      `UPDATE tasks SET
      title = ?,
      description = ?,
      updated_at = DATETIME('now') WHERE id = ?`,
      [task.title, task.description, id]
    );

    return response.status(202).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const task = await knex("tasks").where({ id }).first();

    return response.status(202).json({ ...task });
  }

  async index(request, response) {
    const { title } = request.query;
    const user_id = request.user.id;
    const tasks = await knex("tasks")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");

    return response.status(202).json(tasks);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("tasks").where({ id }).delete();
    return response.status(202).json();
  }
}

module.exports = TasksController;
