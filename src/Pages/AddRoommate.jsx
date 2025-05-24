import React from 'react';
import Swal from 'sweetalert2';

const AddRoommate = () => {

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newRoommate = Object.fromEntries(formData.entries());
        newRoommate.likeCount = 0;
        console.log(newRoommate);
        fetch("http://localhost:3000/roommate", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newRoommate),
        })
            .then(result => result.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "New Roommates Details added successfully !!",
                        timer: 1500
                    });
                    e.target.reset();
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Please try again later!!",
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-primary text-center'>New Roommate Details</h1>
            <p className='mb-3 md:mb-6 text-center'>Add new roommate details to help others find suitable roomate easily</p>
            <div className='bg-base-200 border-base-300 rounded-box border mb-3 md:mb-6'>
                <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleAddSubmit}>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Title<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Give a title" name="title" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Location<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide location details" name="location" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Rent Amount<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide rent amount" name="rent" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Room Type<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide room type" name="roomType" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Lifestyle Preferences<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide lifestyle preferences" name="lifestyle" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Description<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Describe the roommate" name="description" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Contact Info<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide contact number" name="contact" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Availability<span className='text-red-400'>*</span></label>
                        <select className="input w-full dark:text-white" placeholder="Select Availability" name="availability" required>
                            <option value="">--Please choose an option--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">User Email<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" value="userEmail" readOnly name="userEmail" />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">User Name<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" value="userName" readOnly name="userName" />
                    </div>
                    <button type='submit' className='btn btn-secondary w-full font-bold text-white mt-4 md:col-span-2'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddRoommate;