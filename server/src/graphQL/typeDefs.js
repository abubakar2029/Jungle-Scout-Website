const typeDefs = `#graphql
type User{
name:String!
email:String
password:String!
}

type Query {
    getRecord:[User]
}
type Mutation{
    addPerson(data:addUserInput!):User
    delPerson(id:ID!):[User]
}
input addUserInput{
    name:String!
    email:String
    password:String! 
}
`;

module.exports = typeDefs;
