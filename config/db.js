require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    // process.env.MONGO_CONNECTION_URL secret variable containing ur important info about mongo atlas;
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection
    .once('open', function () {
      console.log('Database connected');
    })
    .on('error', function (err) {
      console.log("Connection failed");
    });
     
}

// mIAY0a6u1ByJsWWZ
module.exports = connectDB;