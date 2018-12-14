export default `
type Accounts {
  _id: String!
  account_name: String!
  selldo_id: String!
  current_churn: Float!
  invoice: [Invoice]!
  recommendations: [String]!
}

type Invoice {
  amount: Int!
  month: String!
}

type Query {
  allAccounts: [Accounts!]!
  findOne(id: String!): Accounts
}

type Mutation {
  createCat(name: String!): Accounts!
}
`;
