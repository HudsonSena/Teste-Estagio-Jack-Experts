const { Router } = require("express");

const usersRoutes = require("./users.routes");
const tasksRoutes = require("./tasks.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/tasks", tasksRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
