const typeDefs = `#graphql
type EmailData {
  email: String!
  password: String!
}
scalar Date
type CreditCardData {
  cardNumber: Int!
  expires: Date!
  cvc: Int!
}

type AddressData {
  firstName: String!
  lastName: String!
  address: String!
  city: String!
  country: String!
  state: String!
  zip: Int!
}

type User {
  emailData: EmailData!
  creditCardData: CreditCardData!
  addressData: AddressData!
}
type Query {
    test:Int
}
type Mutation{
    testMutation(data:data):Int
    signup(data:userInput):User
    login(email: String!, password: String!): AuthPayload!
    addPerson(data:addUserInput!):User
    delPerson(id:ID!):[User]
}
type AuthPayload {
  token: String
  user: User
}
input data{
  msg: String
  num: Int
}
input EmailDataInput {
  email: String
  password: String
}
input CreditCardDataInput {
  # cardNumber: String
  expires: Date
  cvc: Int!
}

input AddressDataInput {
  firstName: String!
  lastName: String!
  address: String!
  city: String!
  country: String!
  state: String!
  zip: Float
}
input userInput {
  emailData: EmailDataInput!
  creditCardData: CreditCardDataInput!
  addressData: AddressDataInput!
}
input addUserInput{
    name:String!
    email:String
    password:String! 
}
`;

module.exports = typeDefs;
