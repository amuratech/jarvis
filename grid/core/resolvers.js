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
    findOne: async (parent, args, { Accounts }) => {
      const cats = await Accounts.findOne({ _id: args.id });
      return cats;
    },
  },
};
