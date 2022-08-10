import React from 'react'
import { Link } from 'react-router-dom';

function Popup() {
    return (
        <div>
           <section className="flex items-center h-[900px] p-16 dark:bg-gray-200 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-5xl dark:text-gray-600">
            Sucessful!
			</h2>
			
			<p className="mt-4 mb-8 dark:text-gray-400">You have submitted the form. You can find plenty of other things on our homepage.</p>
			<Link to="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-orange-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
        </div>
    )
}

export default Popup