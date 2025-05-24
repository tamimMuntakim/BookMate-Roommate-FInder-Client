import React from 'react';
import { useLoaderData } from 'react-router';

const RoommateDetails = () => {
    const roommate = useLoaderData();
    console.log(roommate);
    
    return (
        <div>
            Im roommate details
        </div>
    );
};

export default RoommateDetails;