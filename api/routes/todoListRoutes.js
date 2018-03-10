'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // transactions Routes
    app.route('/api/transactions')
        .get(todoList.list_all_transactions)
        .post(todoList.create_a_transaction);


    app.route('/api/transactions/:id')
        .get(todoList.read_a_transaction)
        .put(todoList.update_a_transaction)
        .delete(todoList.delete_a_transaction);


    // accounts Routes
    app.route('/api/accounts')
        .get(todoList.list_all_transactions)
        .post(todoList.create_a_transaction);

    app.route('/api/accounts/:id')
        .get(todoList.read_a_transaction)
        .put(todoList.update_a_transaction)
        .delete(todoList.delete_a_transaction);

    app.route('api/enums/transactionTypes')
        .get(todoList.read_a_transaction)
        .put(todoList.update_a_transaction)
        .delete(todoList.delete_a_transaction);

};

