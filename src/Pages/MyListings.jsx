import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';

const MyListings = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const posts = useLoaderData();
    const filteredPosts = posts.filter((post) => post.userEmail == user.email);
    const [myPosts, setMyPosts] = useState(filteredPosts);

    const handleUpdate = (id) => {
        navigate(`/update-details/${id}`);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b11-assn-10-orange-book-mate-server.vercel.app/roommates/${id}`, {
                    method: "DELETE",
                })
                    .then((result) => result.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            const newMyPosts = myPosts.filter((myPost) => myPost._id != id);
                            setMyPosts(newMyPosts);
                            Swal.fire({
                                icon: "success",
                                title: "Post deleted successfully !!",
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <title>BookMate || My Listings</title>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-primary text-center'>My Listings</h1>
            <p className='mb-3 md:mb-6 text-center'>See all of your roommate posts below</p>
            <div className="overflow-x-auto rounded-box border border-slate-200 bg-base-100 mb-8">
                <table className="table table-zebra">
                    <thead>
                        <tr className='border-b border-b-slate-400 text-xs md:text-sm'>
                            <th>Sl No.</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Room Type - Rent</th>
                            <th>Available</th>
                            <th className='min-w-[90px] md:min-w-[115px] p-0'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPosts.map((myPost, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-slate-400 text-xs md:text-sm'>
                                        <td>{index + 1}</td>
                                        <td>{myPost.title}</td>
                                        <td>{myPost.location}</td>
                                        <td>{myPost.roomType} - {myPost.rent} Taka</td>
                                        <td>{myPost.availability == "true" ? "Yes" : "No"}</td>
                                        <td className='p-0'>
                                            <button className="btn btn-xs md:btn-sm bg-primary text-white font-bold mx-auto" onClick={() => handleUpdate(myPost._id)}><MdEditDocument className='md:text-base' /></button>
                                            <button className="btn btn-xs md:btn-sm bg-red-600 text-white font-bold mx-auto" onClick={() => handleDelete(myPost._id)}><MdDeleteForever className='md:text-base' /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;