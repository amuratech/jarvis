import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/labs');
const Accounts = mongoose.model('accounts', { account_name: String, selldo_id: String, current_churn: Number, invoice: [], recommendations: [] });

module.exports = { mongoose, Accounts };
