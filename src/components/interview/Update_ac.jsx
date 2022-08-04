import React, { useState } from 'react'
import classes from './stylesT'
import interviewSchema from '../schemas/schamas'
import { formik, useFormik } from 'formik'
import Axios from "axios";

const Update_ac = ({ values, errors, touched, handleChange, handleBlur }) => {

    return (

        <div className={classes.Container}>
            <h1 className={classes.heading}> Update academy progress</h1>
            <form class={classes.Form} >
                <div class={classes.FormBox}>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Placement question paper score
                        </label>
                        <input
                            value={values.score}
                            id="score"
                            class={classes.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" />
                        <div class="flex flex-wrap -mx-3 mb-2">
                            {errors.score && touched.score && <p className={classes.VaildE}>{errors.score}</p>}
                            {values.score.match(/[^0-9]/) ? <p className={classes.VaildE}>{errors.score1}</p> : ""}

                            {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}

                        </div>
                        {/* </div> */}
                        <div className="flex justify-between items-center py-3 ">

                            <button  className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="reset">Clear</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Update_ac