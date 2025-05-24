import React, { useEffect, useState } from 'react';
import Sliders from '../components/Sliders';
import FeaturedPosts from '../components/FeaturedPosts';
import PlatformStatistics from '../components/PlatformStatistics';

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
            <section id="platform-statistics" className='mt-7 md:mt-14'>
                <PlatformStatistics></PlatformStatistics>
            </section>
        </>
    );
};

export default Home;