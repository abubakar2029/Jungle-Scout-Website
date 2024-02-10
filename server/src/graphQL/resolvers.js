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

        // let jwtToken;
        // await jwt.sign(
        //   { email: response.email },
        //   "monday",
        //   {
        //     expiresIn: "2h",
        //   },
        //   (err, token) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log(token);
        //       jwtToken = token;
        //     }
        //   }
        // );

        console.log("response.emailData.email", response.emailData.email);
        let token;
        try {
          token = await jwt.sign(
            { email: response.emailData.email },
            "monday",
            {
              expiresIn: "2h",
            }
          );
        } catch (err) {}
        // const token = await new Promise((resolve, reject) => {
        //   jwt.sign(
        //     { email: response.emailData.email },
        //     "monday",
        //     {
        //       expiresIn: "2h",
        //     },
        //     (err, token) => {
        //       if (err) {
        //         reject(err);
        //       } else {
        //         resolve(token);
        //       }
        //     }
        //   );
        // });

        console.log("jwtToken : ", token);
        return { user: newPerson, token };
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
          return { status: 500 };
        }
        console.log("user mil gaya: ", user);

        // Generate a JWT token
        const token = jwt.sign({ email: user.emailData.email }, "secret");

        return { token, user, status: 200 };
      } catch (error) {
        return { status: error.status };
        // throw new Error("Error logging in", error);
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
