import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AiFillLike } from "react-icons/ai";
import { AuthContext } from '../Providers/AuthProvider';

const RoommateDetails = () => {
    const roommate = useLoaderData();
    const { _id, title, location, rent, roomType, lifestyle, description, contact, availability, userEmail, userName, likeCount } = roommate;
    const [likes, setLikes] = useState(parseInt(likeCount));
    const [userLiked, setUserLiked] = useState(false);

    const { user } = use(AuthContext);

    const handleLike = () => {
        fetch(`https://b11-assn-10-orange-book-mate-server.vercel.app/roommates/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ likeCount: `${likes + 1}` }),
        })
            .then(result => result.json())
            .then(() => {
                setLikes(likes + 1);
                setUserLiked(true);
            });
    }

    return (
        <div>
            <title>BookMate || Roommate Details</title>
            <div className="card w-full md:max-w-md mx-auto bg-base-200 shadow-xl border border-slate-200 min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-279px)] flex justify-center items-center mb-4">
                <div className="card-body">
                    <p className='text-right'>{likes} people interested in</p>
                    <h2 className="card-title text-xl md:text-2xl font-bold">{title}</h2>
                    <p className=" mb-2">{location}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2">
                        <span className="badge badge-primary text-white">Rent: {rent} Taka</span>
                        <span className="badge badge-secondary text-white">Room: {roomType}</span>
                        <span className="badge badge-primary text-white">Available: {(availability == "true" ? "Yes" : "No")}</span>
                    </div>
                    <p className="mb-2">{description}</p>
                    <p className="mb-2">{lifestyle}</p>
                    {
                        (userLiked) && (<p className="mb-2">Contact: {contact}</p>)
                    }
                    <div>
                        <span className="font-semibold">Posted by:</span> {userName} <span className="text-xs font-light">({userEmail})</span>
                    </div>
                    {
                        (user.email != userEmail)
                        &&
                        (
                            (!userLiked) && (<div className='text-right mt-2'>
                                <button className='btn btn-primary btn-sm md:text-lg text-white' onClick={handleLike}><AiFillLike /></button>
                            </div>)
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RoommateDetails;