/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

export default {
  Query: {
    allAccounts: async (parent, args, { Accounts }) => {
      const cats = await Accounts.find();
      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },

    allTickets: async (parent, arg, { Tickets }) => {
      const tickets = await Tickets.find();
      return tickets.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },

    findOne: async (parent, args, { Accounts }) => {
      const cats = await Accounts.findOne({ _id: args.id });
      return cats;
    },
  },
};
