'use strict';


var mongoose = require('mongoose'),
    Transaction = mongoose.model('Transactions');


exports.list_all_transactions = function (req, res) {
    Transaction.find({}, function (err, transaction) {
        if (err)
            res.send(err);
        res.json(transaction);
    });
};

exports.create_a_transaction = function (req, res) {
    var new_transaction = new Transaction(req.body);
    new_transaction.save(function (err, transaction) {
        if (err)
            res.send(err);
        res.json(transaction);
    });
};


exports.read_a_transaction = function (req, res) {
    console.log(req.params.id)
    Transaction.findOne({ Id: req.params.id }, function (err, transaction) {
        if (err)
            res.send(err);
        res.json(transaction);
    });
};


exports.update_a_transaction = function (req, res) {
    Transaction.findOneAndUpdate({
        Id: req.params.id
    }, req.body, {
            new: true
        }, function (err, transaction) {
            if (err)
                res.send(err);
            res.json(transaction);
        });
};


exports.delete_a_transaction = function (req, res) {
    Transaction.remove({
        Id: req.params.id
    }, function (err, transaction) {
        if (err)
            res.send(err);
        res.json({
            message: 'Transaction successfully deleted'
        });
    });
};