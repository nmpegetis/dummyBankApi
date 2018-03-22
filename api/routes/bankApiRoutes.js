'use strict';
module.exports = function(app) {
  var bankApi = require('../controllers/bankApiController');

  // transactions Routes
  app
    .route('/api/transactions')
    .get(bankApi.list_all_transactions)
    .post(bankApi.create_a_transaction);

  app
    .route('/api/transactions/:id')
    .get(bankApi.read_a_transaction)
    .put(bankApi.update_a_transaction)
    .delete(bankApi.delete_a_transaction);

  // accounts Routes
  app
    .route('/api/accounts')
    .get(bankApi.list_all_accounts)
    .post(bankApi.create_an_account);

  app
    .route('/api/accounts/:id')
    .get(bankApi.read_an_account)
    .put(bankApi.update_an_account)
    .delete(bankApi.delete_an_account);

  // branches Routes
  app
    .route('/api/branches')
    .get(bankApi.list_all_branches)
    .post(bankApi.create_a_branch);

  app
    .route('/api/branches/:id')
    .get(bankApi.read_a_branch)
    .put(bankApi.update_a_branch)
    .delete(bankApi.delete_a_branch);
};
