import React from 'react'
import { Stepper, Step, StepLabel, Typegraphy, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import IN from '../interview/IN'
import Update_ac from '../interview/Update_ac'
import Update_in from '../interview/Update_in'
import { formik, useFormik } from 'formik'
import interviewSchema from '../schemas/schamas';
import Axios from "axios";
import Navbar from '../navbar/Navbar';
import NavLogout from '../navbar/NavLogout';
import Popup from './Popup'
import { Link ,useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "45%",
        margin: "6rem auto",
        border: "1px solid #999 round",
        "& .MuiStepIcon-root.Mui-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.Mui-completed": {
            color: "pink"
        },
        borderRadius: "25px",
        color: "white",
        backgroundColor: "white",
        padding: "20px"
    },
    complete: {

        padding: "50px",

        textAlign: "center",
        fontFamily: ""


    },


})


function FormComponent() {
    //react hooks
    const navigate = useNavigate();
    const [listOfUsers, setListOfUsers] = useState([]);

    const createUser = () => {

        if(!values.pId || !values.cId || !values.cName || !values.bName || !values.tOfD || !values.domain || !values.Aptitude_round_statues || !values.HR_interview_statues || !values.Tech_interview || !values.Tech_written_statues || !values.Job_role || !values.score)
        {
            alert("Please fill with the whole requirement..."); 
            return true;
        
        }
        else{
         
        Axios.post("http://localhost:5001/createUsers", {
            pId: values.pId,
            cId: values.cId,
            cName: values.cName,
            bName: values.bName,
            domain: values.domain,
            tOfD: values.tOfD,
            Aptitude_round_statues: values.Aptitude_round_statues,
            Tech_written_statues: values.Tech_written_statues,
            Tech_interview: values.Tech_interview,
            HR_interview_statues: values.HR_interview_statues,
            Job_role: values.Job_role,
            score: values.score

        }).then((response) => {
            setListOfUsers([...listOfUsers, this.pId, this.cId, this.cName, this.bName, this.domain, this.tOfD, this.Aptitude_round_statues,
            this.Tech_written_statues,
            this.Tech_interview,
            this.HR_interview_statues,
            this.Job_role,
            this.score
            ]);
        });
    }
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
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
        },
        validationSchema: interviewSchema,
        onSubmit: () => {
            createUser();
        },


    })
    console.log(values);
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["CANDIDATE REGISTRATION", "UPDATE INTERVIEW PROGRESS", "UPDATE ACADEMY PROGRESS"]
    }

    function handleNext() {

        setActiveStep(next => next + 1) 
    }


    const handlePervious = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }
    const last = () => {
        setActiveStep(prevActiveStep => 0)
    }

     function Alert () {
        if(!values.pId || !values.cId || !values.cName || !values.bName || !values.tOfD || !values.domain || !values.Aptitude_round_statues || !values.HR_interview_statues || !values.Tech_interview || !values.Tech_written_statues || !values.Job_role)
        {
            alert("Please fill the requirement..."); 
        
        }
     }
        
      

    const Confirm = () => {
         
        return (
            <div>
                <div class="mt-9 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div class="p-6 text-center">
                                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure that you filled details correctly this form?</h3>
                                <button type="submit" onClick={createUser} class="text-black bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                {
                                createUser===true ? navigate("/interview") : 
                                
                                <Link to='/sucessful' > Yes I am sure</Link>
                                }
                                </button>
                                <button onClick={last} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, Check it</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
        

    }

    const steps = getSteps()
    const classes = useStyles()

    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <IN values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} />;
            case 1:
                return <Update_in values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} />;
            case 2:
                return <Update_ac values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} />;
            default:
                return "Complete";

        }
    }


    return (
        <div>
            <NavLogout />

            <div className={classes.root}>
                <form onSubmit={handleSubmit}>

                    <Stepper activeStep={activeStep} alternativeLabel >
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel class='font-bold'>

                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>

                        {activeStep === steps.length ? <div class="py-[40px]">
                            <Confirm />
                           
                        </div> : (
                            <div className="flex-auto">
                                {getStepsContent(activeStep)}

                                    {activeStep === 0 ? <button disabled={activeStep === 0} class=" bg-gray-200 text-black font-bold p-3 rounded-md ml-[85px]" onClick={handlePervious}>
                                        Back
                                    </button> : <button class=" bg-orange-600 text-black font-bold p-3 rounded-md ml-[85px]" onClick={handlePervious}>
                                        Back
                                    </button>}
                                    <button class=" bg-orange-600 text-black font-bold p-3 rounded-md ml-[500px]" onChange={handleChange} onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? <Button onChange={handleChange} class="bg-orange-600 text-black"> Submit </Button> : "NEXT"}
                                    </button>

                                </div>
                            )}
                    </>
                </form>
            </div>

        </div>

    )
}



export default FormComponent