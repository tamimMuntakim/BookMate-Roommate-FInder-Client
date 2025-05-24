import React from 'react';
import { useNavigate } from 'react-router';

const FeaturedPost = ({ post }) => {
    const { _id, title, location, rent, availability, roomType } = post;
    const navigate = useNavigate();

    const seeMoreBtnHandler = (id) =>{
        navigate(`/roommate-details/${id}`);
    }
    return (
        <div className="card bg-secondary text-secondary-content">
            <div className="card-body gap-2 justify-between">
                <h2 className="card-title text-sm md:text-base">{title}</h2>
                <div className='space-y-0.5 text-xs md:text-sm'>
                <p className='badge badge-xs dark:bg-primary dark:text-white'>{(availability == "true")? "Available" : "Not Available"}</p>
                <p>{roomType}</p>
                <p>{location}</p>
                <p>Rent: {rent} Taka</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-xs md:btn-sm dark:bg-primary dark:text-white" onClick={()=> seeMoreBtnHandler(_id)}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;