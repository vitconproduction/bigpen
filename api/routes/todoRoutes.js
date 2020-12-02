'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoController');

  // todoList Routes
  app.route('/tasks/:url')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
    app.route('/nlp/:url')
    .get(todoList.list_nlp)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};