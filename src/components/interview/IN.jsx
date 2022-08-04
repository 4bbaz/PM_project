import React from 'react'
import { useState } from 'react';
import classes from './stylesT';
import { formik, useFormik } from 'formik'
import interviewSchema from '../schemas/schamas';


import Axios from "axios";


const IN = ({ values, errors, touched, handleChange, handleBlur }) => {

    
    return (
        <>
        <div className={classes.Container}>


            <h1 className={classes.heading}> ACCENTURE - CANDIDATE REGISTRATION</h1>
            <form class="container mx-auto px-11" >

                <div class={classes.FormBox}>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Placement Drive ID
                        </label>
                        <input
                            value={values.pId}
                            id="pId"
                            class={classes.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" />

                    </div>
                    {errors.pId && touched.pId && <p className={classes.VaildE}>{errors.pId}</p>}
                    {values.pId.match(/[^0-9]/) ? <p className={classes.VaildE}>{errors.pId1}</p> : ""}
                    
            
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Candidate ID
                        </label>
                        <input
                            value={values.cId}
                            id="cId"
                            class={classes.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" />

                    </div>
                    {errors.cId && touched.cId && <p className={classes.VaildE}>{errors.cId}</p>}
                    {values.cId.match(/[^0-9]/) ? <p className={classes.VaildE}>{errors.cId1}</p> : ""}
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Candidate Name
                        </label>
                        <input
                            value={values.cName}
                            id="cName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            class={classes.input} type="text" />

                    </div>
                    {errors.cName && touched.cName && <p className={classes.VaildE}>{errors.cName}</p>}
                    
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Batch Name
                        </label>
                        <input
                            value={values.bName}
                            id="bName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            class={classes.input} type="text" />

                    </div>
                    {errors.bName && touched.bName && <p className={classes.VaildE}>{errors.bName}</p>}
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Domain
                        </label>
                        <div class="relative">
                            <select
                                value={values.domain}
                                id="domain"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class={classes.input}>
                                <option></option>
                                <option>IT</option>
                                <option>BRA</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    {errors.domain && touched.domain && <p className={classes.VaildE}>{errors.domain}</p>}
                </div>


                {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Type of Disability
                </label>
                <div class="relative">
                    <select
                        value={values.tOfD}
                        onChange={handleChange}
                        id="tOfD"
                        onBlur={handleBlur}
                        class={classes.input}>
                        <option></option>
                        <option>Deaf</option>
                        <option>Hard of hearing</option>
                        <option>hearing impaired</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                        <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>

                {errors.tOfD && touched.tOfD && <p className={classes.VaildE}>{errors.tOfD}</p>}

                {/* </div> */}

                <div className="flex justify-between items-center py-3 ">
                   
                <button onClick={()=>this.form.reset()} className=' bg-orange-600 text-black font-bold p-3 rounded-md'>Clear</button>
                
                  
                </div>

            </form>
        </div>
        </>

    )
}

export default IN
