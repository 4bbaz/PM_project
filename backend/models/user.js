const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  pId: "",
  cId: "",
  cName: "",
  bName: "",
  domain: "",
  tOfD: "",
  Aptitude_round_statues: "",
  Tech_written_statues: "",
  Tech_interview: "",
  HR_interview_statues: "",
  Job_role: "",
  score: "",
});


const UserModel = mongoose.model("candidate_regs", UserSchema);

module.exports = UserModel;
