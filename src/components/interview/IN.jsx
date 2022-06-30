import React from 'react'
import { useState } from 'react';





const IN = () => {
    const [name,setName]= useState({});

    const handledchange=(event)=>{
        event.preventDefault();
        const plid=event.target.plid;
        const clid=event.target.clid;
        setName(values=>([name]))
        
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        console.log(name);
    }
    document.title = 'Interview'
    return (
        
      
      

        
   < div className='bg-white px-[200px] py-2 my-5  mx-[400px] rounded-md'>


            <div class="absolute inset-y-18  left-10 w-50 text-black-900 px-5 rounded-x bg-slate-300">



                <ul type="circle">
                <li> Candidate Registration  </li>
                <li> Update Interview process </li>
                <li> Update Academy progress  </li>
                <li> Display Candidate Registration</li>
                <li> Display Update interview process</li>
                <li> Display Update academy progress</li>

            </ul>
            </div>


        <h1 className='text-black font-bold py-3 px-5 my-3 bg-orange-500 rounded-xl text-center'> ACCENTURE - CANDIDATE REGISTRATION</h1><form class="w-full  max-w-lg" onSubmit={handleSubmit}>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Placement Drive ID
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name="plied" value={name.plied} OnChange={(e) => setName(e.target.value)} />

                    </div>
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Candidate ID
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name="clii" value={name.clid} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Candidate Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />

                    </div>
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Batch Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />

                    </div>
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Domain
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-[320px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>IT</option>
                                <option>BRA</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Type of Disability
                </label>
                <div class="relative">
                    <select class="block appearance-none w-[320px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Deaf</option>
                        <option>Hard of hearing</option>
                        <option>hearing impaired</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                        <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>

                {/* </div> */}
                <div className="flex justify-between items-center py-3 ">
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="submit">Submit</button>
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="reset">Clear</button>
                </div>

            </form>
        </div>
      
    )
}

export default IN


const forms=()=>
{
    return (


<div class="absolute h-32 w-32">
<div class="absolute inset-y-0 left-0 w-16 text-white-900 bg-white">hello wotldsfdsfkjsdf</div>
</div>

    );
}