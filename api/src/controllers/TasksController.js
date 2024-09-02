const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class TasksController {
  async create(request, response) {
    const { user_id } = request.params;
    const { title, description } = request.body;
    const database = await sqliteConnection();
    const checkUserExist = await database.get(
      "SELECT * FROM tasks WHERE title = (?)",
      [title]
    );

    console.log(user_id);

    if (checkUserExist) {
      throw new AppError("Título ja cadastrado");
    }

    await database.run(
      "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)",
      [title, description, user_id]
    );

    return response.status(201).json();
  }
  async update(request, response) {
    const { title, description } = request.body;
    const { id } = request.params;
    const database = await sqliteConnection();
    const task = await database.get("SELECT * FROM tasks WHERE ID = (?)", [id]);

    if (!task) {
      throw new AppError("Tarefa não encontrada");
    }

    const taskWithUpdatedTitle = await database.get(
      "SELECT * FROM tasks WHERE title = (?)",
      [title]
    );

    if (taskWithUpdatedTitle && taskWithUpdatedTitle.id !== id) {
      throw new AppError("Esta título ja esta em uso");
    }

    task.title = title;
    task.description = description;

    await database.run(
      `UPDATE tasks SET
      title = ?,
      description = ?,
      updated_at = DATETIME('now') WHERE id = ?`,
      [task.title, task.description, id]
    );

    return response.status(200).json();
  }
  /*delete(request, response) {
    const { id } = request.params;
    response.json();
  }*/
}

module.exports = TasksController;
