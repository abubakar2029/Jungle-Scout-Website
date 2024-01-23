const User = require("../models/userSchema");

module.exports = {
  Query: {
    async getRecord() {
      try {
        return await User.find();
      } catch (error) {
        throw new Error("Error fetching records");
      }
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
