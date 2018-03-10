'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransactionSchema = new Schema({
    Id: {
        type: Number,
        required: 'Kindly enter the incremental id of the transaction'
    },
    Amount: {
        type: Number,
        required: 'Kindly enter the amount of the transaction'
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Type: {
        type: Number,
        required: 'Kindly enter the type of the transaction'
    },
    AccountCodeFrom: {
        type: String,
        required: 'Kindly enter the AccountCodeFrom of the transaction'
    },
    AccountCodeTo: {
        type: String,
        required: 'Kindly enter the AccountCodeTo of the transaction'
    },
    Comment: {
        type: String,
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

var AccountSchema = new Schema({
    Id: {
        type: Number,
        required: 'Kindly enter the incremental id of the asccount'
    },
    Code: {
        type: String,
        required: 'Kindly enter the Code of the account'
    },
    Name: {
        type: String,
        required: 'Kindly enter the Full Name of the account'
    },
});


module.exports = mongoose.model('Transactions', TransactionSchema);
module.exports = mongoose.model('Accounts', AccountSchema);