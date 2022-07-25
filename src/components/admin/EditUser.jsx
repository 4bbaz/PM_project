import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import classes from '../interview/stylesT';

const EditUser = () => {
    let history = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState({
        pId: "",
        cId: "",
        cName: "",
        bName: "",
        domain: "",
        tOfD: "",
        Aptitude_round_statues: "",
        Tech_written_statues: "",
        HR_interview_statues: "",
        Job_role: "",
        score: "",
    });

    const { pId, cId, cName,
        bName,
        domain,
        tOfD,
        Aptitude_round_statues,
        Tech_written_statues,
        HR_interview_statues,
        Job_role,
        score } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5001/update/${id}`, user);
        history("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5001/user/${id}`);
        setUser(result.data);
    };
    return (
        <div className={classes.Container}>
            <div className="w-75 mx-auto p-5">
                <h2 className="mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-6">
                    <label className={classes.label}>Placement Drive ID</label>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder="Placement Drive ID: "
                            name="pId"
                            value={pId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="">
                    <label className={classes.label}>Candidate ID</label>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder="Candidate ID"
                            name="cId"
                            value={cId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="">
                        <label className={classes.label}>Candidate Name</label>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder="Candidate Name"
                            name="cName"
                            value={cName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="">
                    <label className={classes.label}>Batch Name:</label>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder="Batch Name:"
                            name="bName"
                            value={bName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="">
                    <label className={classes.label}>Domain</label>
                        <div class="relative">
                            <select
                                placeholder="Domain: "
                                value={domain}
                                id="domain"
                                onChange={e => onInputChange(e)}

                                className={classes.input}>
                                <option></option>
                                <option>IT</option>
                                <option>BRA</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label className={classes.label}>Type of Disability</label>
                        <div class="relative">
                            <select
                                value={tOfD}
                                onChange={e => onInputChange(e)}
                                id="tOfD"
                                placeholder=" Type of Disability"
                                className={classes.input}>
                                <option></option>
                                <option>Deaf</option>
                                <option>Hard of hearing</option>
                                <option>hearing impaired</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="">
                    <label className={classes.label}>Aptitude round statues</label>
                        <div class="relative">
                            <select
                                placeholder="Aptitude round statues: "
                                value={Aptitude_round_statues}
                                id="Aptitude_round_statues"
                                onChange={e => onInputChange(e)}
                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label className={classes.label}>Tech-written statues</label>
                        <div class="relative">
                            <select
                                placeholder="Tech-written statues: "
                                value={Tech_written_statues}
                                id="Tech_written_statues"
                                onChange={e => onInputChange(e)}

                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label className={classes.label}>HR interview statues</label>
                        <div class="relative">
                            <select
                                placeholder="HR-interview statues: "
                                value={HR_interview_statues}
                                id="HR_interview_statues"
                                onChange={e => onInputChange(e)}

                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label className={classes.label}>HR interview statues</label>
                        <div class="relative">
                            <select
                                placeholder="Job role: "
                                value={Job_role}
                                id="Job_role"
                                onChange={e => onInputChange(e)}

                                className={classes.input}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label className={classes.label}>Score:</label>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder="Batch Name:"
                            name="score"
                            value={score}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="bg-red-600 text-black font-bold p-3 rounded-md">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
