const User = require("../models/User");
var jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    // async getRecord() {
    //   try {
    //     return await User.find();
    //   } catch (error) {
    //     throw new Error("Error fetching records");
    //   }
    // },
    async test() {
      console.log("Request Query test");
      return 22;
    },
  },
  Mutation: {
    async addPerson(_, { data }) {
      try {
        const newPerson = new User(data);
        const response = await newPerson.save();
        console.log("New User Created", response);
        return newPerson;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error adding a new person");
      }
    },
    async testMutation(_, { data }) {
      try {
        console.log("Mutation test", data);
        // yahan data ka andar aak objet ha os ma hmara sara client ka key pairs han
        return 22;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error adding a new person");
      }
    },

    async signup(_, { data }) {
      try {
        console.log("Signup Data", data);
        const newPerson = new User(data);
        const response = await newPerson.save();
        console.log("New User Created", response);
        return newPerson;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error adding a new person", error);
      }
    },
    async login(_, { email, password }) {
      try {
        // Find the user by email
        const user = await User.findOne({ "emailData.email": email });

        // Check if the user exists
        if (!user) {
          throw new Error("User not found");
        }
        console.log("FindeOne ka response", user);

        // Generate a JWT token
        const token = jwt.sign({ email: user.emailData.email }, "secret");

        console.log("Logged In");
        return { token, user };
      } catch (error) {
        throw new Error("Error logging in", error);
      }
    },
    async delPerson(_, { id }) {
      try {
        await User.findByIdAndDelete(id);
        return await User.find();
      } catch (error) {
        throw new Error("Error deleting a person");
      }
    },
  },
};