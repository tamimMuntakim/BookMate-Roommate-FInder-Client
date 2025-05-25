import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const BrowseListing = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();

    const seeMoreBtnHandler = (id) =>{
        navigate(`/roommate-details/${id}`);
    }

    return (
        <div>
            <title>BookMate || Browse Listing</title>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-secondary text-center'>Browse Listings</h1>
            <p className='mb-3 md:mb-6 text-center'>See all roommate posts below</p>
            <div className="overflow-x-auto rounded-box border border-slate-200 bg-base-100 mb-8 ">
                <table className="table table-zebra">
                    <thead>
                        <tr className='border-b border-b-slate-400 text-xs md:text-sm'>
                            <th>Sl No.</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent Amount</th>
                            <th>Room Type</th>
                            <th>Available</th>
                            <th className='min-w-[90px] md:min-w-[115px] p-0'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-slate-400 text-xs md:text-sm'>
                                        <td>{index +1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.location}</td>
                                        <td>{post.rent} Taka</td>
                                        <td>{post.roomType}</td>
                                        <td>{post.availability== "true" ? "Yes" : "No"}</td>
                                        <td className='p-0'><button className="btn btn-xs md:btn-sm bg-secondary dark:bg-primary text-white font-bold mx-auto" onClick={()=> seeMoreBtnHandler(post._id)}>See More</button></td>
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

export default BrowseListing;