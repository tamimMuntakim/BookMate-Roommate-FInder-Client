import React from 'react';
import { useLoaderData, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

const UpdatePostDetails = () => {
    const {_id, title, location, rent, roomType, lifestyle, description, contact, availability, userEmail, userName, likeCount } = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedRoommate = Object.fromEntries(formData.entries());
        updatedRoommate.likeCount = likeCount;
        console.log(updatedRoommate);
        fetch(`https://b11-assn-10-orange-book-mate-server.vercel.app/roommates/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedRoommate),
                })
                    .then(result => result.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            Swal.fire({
                                icon: "success",
                                title: "Post details updated successfully !!",
                                timer: 1500
                            });
                            navigate("/my-listings");
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
            <title>BookMate || Update Roommate Details</title>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-primary text-center'>Update Roommate Details</h1>
            <p className='mb-3 md:mb-6 text-center'>Update roommate details to help others find suitable roomate easily</p>
            <div className='bg-base-200 border-base-300 rounded-box border mb-3 md:mb-6'>
                <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleUpdateSubmit}>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Title<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Give a title" name="title" defaultValue={title} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Location<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide location details" name="location" defaultValue={location} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Rent Amount<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide rent amount" name="rent" defaultValue={rent} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Room Type<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide room type" name="roomType" defaultValue={roomType} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Lifestyle Preferences<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide lifestyle preferences" name="lifestyle" defaultValue={lifestyle} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Description<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Describe the roommate" name="description" defaultValue={description} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Contact Info<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" placeholder="Provide contact number" name="contact" defaultValue={contact} required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">Availability<span className='text-red-400'>*</span></label>
                        <select className="input w-full dark:text-white" placeholder="Select Availability" name="availability" required defaultValue={availability}>
                            <option value="">--Please choose an option--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">User Email<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" value={userEmail} readOnly name="userEmail" />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold dark:text-white">User Name<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full dark:text-white" value={userName} readOnly name="userName" />
                    </div>
                    <button type='submit' className='btn btn-primary w-full font-bold text-white mt-4 md:col-span-2'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePostDetails;