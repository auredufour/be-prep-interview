const express = require("express");

const { healthRouter } = require('../routes/health/health.router');
const { citiesRouter } = require('../routes/cities/cities.router');
const { todosRouter } = require('../routes/todos/todos.router');

const router = express.Router();
router.use("/health", healthRouter);
router.use("/cities", citiesRouter);
router.use("/todos", todosRouter);

module.exports = router;
