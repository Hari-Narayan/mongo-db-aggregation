require("dotenv").config();
require("../config/db");
const mongoose = require("mongoose");

const { salesSeeder } = require("./salesSeeder");

let messages = [];

const callSeeder = async () => {
  // Add multiple seeder
  messages.push(await salesSeeder());
};

callSeeder().finally(() => {
  messages.forEach((message) => {
    console.log(message);
  });

  mongoose.disconnect();
  console.log("Disconnected from MongoDB");
});
