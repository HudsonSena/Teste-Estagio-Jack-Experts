const { Router } = require("express");

const usersRoutes = require("./users.routes");
const tasksRoutes = require("./tasks.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/tasks", tasksRoutes);

module.exports = routes;
