'use strict';
module.exports = function(app) {
  const express = require('express');
  var todoList = require('../controllers/todoController');
  const path = require('path');
  const router = express.Router();
  // todoList Routes
  app.route('/tasks/:url')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
    app.route('/createhtml')
    .post(todoList.savehtml_tasks);

    app.route('/nlp/:url')
    .get(todoList.list_nlp)
    app.route('/html/:url')
    .get(todoList.gethtml_tasks)
    app.get('/bigpen',function(req,res){
      res.sendFile(path.join(__dirname+'/bigpen.html'));
    });
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};