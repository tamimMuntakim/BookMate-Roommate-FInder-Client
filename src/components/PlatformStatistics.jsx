import React from 'react';
import { MdPostAdd } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbFlagOff } from "react-icons/tb";
import CountUp from 'react-countup';

const PlatformStatistics = () => {
    return (
        <div>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-primary'>Platform Statistics</h1>
            <p className='mb-2 md:mb-4'>Performance of our platform over the last calendar year</p>
            <div className='flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4'>
                <div className='bg-base-200 p-4 md:p-8 rounded-md md:rounded-xl shadow-md hover:shadow-lg border border-slate-200'>
                    <img className='w-[30px] md:w-[45px] h-auto' src="https://img.icons8.com/color/240/goodnotes.png" alt="goodnotes" />
                    <p className='font-bold md:text-2xl my-1 md:my-3'> <CountUp end={900} duration={10} /> +</p>
                    <p>Total Posts</p>
                </div>
                <div className='bg-base-200 p-4 md:p-8 rounded-md md:rounded-xl shadow-md hover:shadow-lg border border-slate-200'>
                    <img className='w-[30px] md:w-[45px] h-auto' src="https://img.icons8.com/fluency/48/verified-account.png" alt="verified-account" />
                    <p className='font-bold md:text-2xl my-1 md:my-3'> <CountUp end={250} duration={10} /> +</p>
                    <p>Successful Bookings</p>
                </div>
                <div className='bg-base-200 p-4 md:p-8 rounded-md md:rounded-xl shadow-md hover:shadow-lg border border-slate-200'>
                    <img className='w-[30px] md:w-[60px] h-auto' src="https://img.icons8.com/emoji/96/hourglass-not-done.png" alt="hourglass-not-done" />
                    <p className='font-bold md:text-2xl my-1 md:my-3'> <CountUp end={12} duration={5} /> hrs+</p>
                    <p>Average Response Time</p>
                </div>
                <div className='bg-base-200 p-4 md:p-8 rounded-md md:rounded-xl shadow-md hover:shadow-lg border border-slate-200'>
                    <img className='w-[30px] md:w-[45px] h-auto' src="https://img.icons8.com/forma-thin-filled-sharp/96/FA5252/flag.png" alt="flag" />
                    <p className='font-bold md:text-2xl my-1 md:my-3'> <CountUp end={0} duration={10} /></p>
                    <p>Total Fraudulent Cases</p>
                </div>
            </div>
        </div>
    );
};

export default PlatformStatistics;