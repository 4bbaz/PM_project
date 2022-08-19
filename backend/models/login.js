const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
 username:"",
 password:""
});

const LoginModel = mongoose.model("logins",LoginSchema);


module.exports = LoginModel;

