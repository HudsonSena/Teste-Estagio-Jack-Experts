class TasksController {
  create(request, response) {
    const { title, description } = request.body;
    response.json({ title, description });
  }
  update(request, response) {
    const { title, description } = request.body;
    response.json({ title, description });
  }
  delete(request, response) {
    const { id } = request.params;
    response.json();
  }
}

module.exports = TasksController;