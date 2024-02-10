const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");
// Specifying path to .env
dotenv.config({ path: "../.env" });
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
/* Middleware */
app.use(cors());
const jwt = require("jsonwebtoken");
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
console.log("@Ya mongo URI ha", mongoURI);
async function connect() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Atlas!");
    // await Patient.create({ uname: "also_awesome", name: "Awais" });
  } catch (error) {
    console.log("Ya error aya", error);
  }
}
connect();

app.post("/check-token", (req, res) => {
  console.log(req.body.token);
  jwt.verify(req.body.token, "monday", (err, data) => {
    console.log("Data : ", data);
  });
});
const bootstrapServer = async () => {
  // Setting up the server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`🚀 Express ready at http://localhost:${port}`);
    console.log(`🚀 Graphql ready at http://localhost:${port}/graphql`);
  });
};

bootstrapServer();
