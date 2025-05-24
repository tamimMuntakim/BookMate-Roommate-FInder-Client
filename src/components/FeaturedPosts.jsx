import React from 'react';
import FeaturedPost from './FeaturedPost';

const FeaturedPosts = ({ posts }) => {
    return (
        <div>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-secondary'>Featured Roommate Posts</h1>
            <p className='mb-2 md:mb-4'>Browse top roommate listings ~ save time, find the right fit!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr'>
                {
                    posts.map((post) => <FeaturedPost key={post._id} post={post}></FeaturedPost>)
                }
            </div>
        </div>
    );
};

export default FeaturedPosts;