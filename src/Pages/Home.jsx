import React, { useEffect, useState } from 'react';
import Sliders from '../components/Sliders';
import FeaturedPosts from '../components/FeaturedPosts';
import PlatformStatistics from '../components/PlatformStatistics';
import Faq from '../components/Faq';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/roommates")
            .then(result => result.json())
            .then(data => {
                setPosts(data.slice(0, 6));
            })
    }, []);

    return (
        <>
            <h1 className='text-center text-3xl md:text-5xl my-3 md:my-6'><span className='text-secondary font-bold'>
            <Typewriter
                words={['Browse', 'Find', 'Contact']}
                loop={0}
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
            /></span> Your Next Roommate</h1>
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