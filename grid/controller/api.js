// import axios from 'axios';
import { Accounts } from './../config/mongo';

const inComing = (req, res) => {
  res.status(200).json({ message: 'Connected!' });
};

const getRequest = (req, res) => {
  let query = {};
  if (req.query) {
    query = req.query;
  }
  Accounts.find(query, (err, docs) => {
    // write allow each and everyone as a helper
    res.status(200).json({ data: docs });
  });
};

module.exports = {
  inComing,
  getRequest,
};
