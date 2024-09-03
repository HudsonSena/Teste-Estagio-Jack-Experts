const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class TasksController {
  async create(request, response) {
    const { user_id } = request.params;
    const { title, description } = request.body;
    const database = await sqliteConnection();

    const checkTitleExist = await database.get(
      "SELECT * FROM tasks WHERE title = (?) AND user_id = (?)",
      [title, user_id]
    );

    if (checkTitleExist) {
      throw new AppError("Título ja cadastrado");
    }

    await database.run(
      "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)",
      [title, description, user_id]
    );

    return response.status(201).json();
  }
  async update(request, response) {
    const { title, description, user_id } = request.body;
    const { id } = request.params;
    const database = await sqliteConnection();
    const task = await database.get("SELECT * FROM tasks WHERE ID = (?)", [id]);

    if (!task) {
      throw new AppError("Tarefa não encontrada");
    }

    const taskWithUpdatedTitle = await database.get(
      "SELECT * FROM tasks WHERE title = (?) AND user_id = (?)",
      [title, user_id]
    );

    if (taskWithUpdatedTitle && taskWithUpdatedTitle.id !== id) {
      throw new AppError("Esta título ja esta em uso");
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

    return response.status(200).json();
  }
  async show(request, response) {}
  async index(request, resposne) {}
  /*delete(request, response) {
    const { id } = request.params;
    response.json();
  }*/
}

module.exports = TasksController;
