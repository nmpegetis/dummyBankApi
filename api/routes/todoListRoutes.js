'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/transactions')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/transactions/:Id')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);


    // todoList Routes
    app.route('/accounts')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/accounts/:Id')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};

