import React, { useEffect, useState } from 'react';
import Sliders from '../components/Sliders';
import FeaturedPosts from '../components/FeaturedPosts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/roommates")
            .then(result => result.json())
            .then(data => {
                setPosts(data.slice(0,6));
            })
    }, []);

    return (
        <>
            <section id="sliders">
                <Sliders></Sliders>
            </section>
            <section id="featured-posts" className='mt-7 md:mt-14'>
                <FeaturedPosts posts={posts}></FeaturedPosts>
            </section>
        </>
    );
};

export default Home;