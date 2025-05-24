import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-279px)] flex justify-center items-center text-secondary'>
            <span className="loading loading-infinity loading-xl md:w-[50px] md:h-auto"></span>
        </div>
    );
};

export default Loader;