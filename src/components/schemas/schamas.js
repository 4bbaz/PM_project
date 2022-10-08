import * as yup from "yup";

const interviewSchema = yup.object().shape({
  pId: yup.string().required("Placement drive ID is Required"),
  pId1:yup.string().required("Only number should be given for placement drive ID"),
  cId1:yup.string().required("Only number should be given for Candidate ID"),
  cId: yup.string().required("Candidate ID is Required"),
  cName: yup.string().required("Candidate name is Required"),
  bName: yup.string().required("Batch name is Required"),
  domain: yup.string().required("Domain is Required"),
  tOfD: yup.string().required("Type of Disability is Required"),
  Aptitude_round_statues: yup.string().required("Please select an option"),
  Tech_written_statues: yup.string().required("Please select an option"),
  Tech_interview: yup.string().required("Please select an option"),
  HR_interview_statues: yup.string().required("Please select an option"),
  Job_role: yup.string().required("Please select an option"),
  score:yup.string().required("Placement score is required"),
  score1:yup.string().required("Only number should be given for score"),
  maxi:yup.string().required("Please give number under only 100"),
});

export default interviewSchema;
