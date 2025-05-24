import React, { useEffect, useState } from 'react';
import Sliders from '../components/Sliders';
import FeaturedPosts from '../components/FeaturedPosts';
import PlatformStatistics from '../components/PlatformStatistics';
import Faq from '../components/Faq';

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
            <section id="faq" className='mt-7 md:mt-14 mb-7 md:mb-14'>
                <Faq></Faq>
            </section>
        </>
    );
};

export default Home;