import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/labs');
const Accounts = mongoose.model('accounts', { account_name: String, selldo_id: String, current_churn: Number, invoice: [], recommendations: [] });

const Tickets = mongoose.model('ticket', { ticket_subject: String, ticket_type: String, current_churn: Number, details: [] });

module.exports = { mongoose, Accounts, Tickets };
