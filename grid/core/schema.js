export default `
type Accounts {
  _id: String!
  account_name: String!
  selldo_id: String!
  current_churn: Float!
  invoice: [Invoice]!
  recommendations: [String]!
}

type Tickets {
  _id: String!
  ticket_subject: String!
  ticket_type: String
  details: [ticketDetails]!
}

type ticketDetails {
  priority: Float!
  category: String!
  status: Float!
}

type Invoice {
  amount: Int!
  month: String!
}

type Query {
  allAccounts: [Accounts!]!
  allTickets: [Tickets]!
  findOne(id: String!): Accounts
}

type Mutation {
  createAccount(account_name: String!): Accounts!
}

type Subscription {
  newAccount: Accounts!
}
`;
