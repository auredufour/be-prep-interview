const express = require('express');

const { getTodosController, postTodosController } = require("./todos.controller");

const router = express.Router();

router.get("", getTodosController);
router.post("", postTodosController);

module.exports = {
    todosRouter: router
}
