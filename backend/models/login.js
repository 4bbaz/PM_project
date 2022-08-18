const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
 username:"",
 password:"",
});

const LoginModel = mongoose.model("login",LoginSchema);


module.exports =LoginModel;

