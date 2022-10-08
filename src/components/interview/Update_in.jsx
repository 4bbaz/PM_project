import React, { useState } from 'react'
import classes from './stylesT'
import interviewSchema from '../schemas/schamas'
import { formik, useFormik } from 'formik'
import Axios from 'axios'


const Update_in = ({ values, errors, touched, handleChange, handleBlur }) => {

    return (


        <div className={classes.Container}>
            <h1 className={classes.heading}> Update interview process</h1>
            <form class="container mx-auto px-11">

                <div class={classes.FormBox}>

                <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                        Aptitude round statues
                        </label>
                   
                    <select
                              
                                value={values.Aptitude_round_statues}
                                id="Aptitude_round_statues"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
 
                            </select>
                 
                    </div>

                    {errors.Aptitude_round_statues && touched.Aptitude_round_statues && <p className={classes.VaildE}>{errors.Aptitude_round_statues}</p>}


                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Tech written statues
                        </label>
                   
                    <select
                               
                                value={values.Tech_written_statues}
                                id="Tech_written_statues"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
 
                            </select>
                    
                    </div>
                    {errors.Tech_written_statues && touched.Tech_written_statues && <p className={classes.VaildE}>{errors.Tech_written_statues}</p>}

                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Tech Interview
                        </label>
                   
                    <select
                               
                                value={values.Tech_interview}
                                id="Tech_interview"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
 
                            </select>
                    </div>
                    
                    {errors.Tech_interview && touched.Tech_interview && <p className={classes.VaildE}>{errors.Tech_interview}</p>}

                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                        HR interview statues
                        </label>
                   
                    <select
                               
                                value={values.HR_interview_statues}
                                id="HR_interview_statues"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
 
                            </select>
                    </div>
                    
                    {errors.HR_interview_statues && touched.HR_interview_statues && <p className={classes.VaildE}>{errors.HR_interview_statues}</p>}

                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                        Job role
                        </label>
                   
                    <select
                                value={values.Job_role}
                                id="Job_role"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={classes.input}>
                               <option></option>    
                                <option>Yes</option>
                                <option>No</option>
 
                            </select>
                    </div>
                    </div>
                    {errors.Job_role && touched.Job_role && <p className={classes.VaildE}>{errors.Job_role}</p>}
                    

                
                <div class="flex flex-wrap -mx-3 mb-2">

                    {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}

                </div>
                {/* </div> */}
                <div className="flex justify-between items-center py-3 ">
                    <button className=' bg-orange-600 text-black font-bold p-3 ml-[-3px] rounded-md' type="reset">Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Update_in