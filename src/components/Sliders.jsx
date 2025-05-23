import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Sliders = () => {
    const slides = [
        {
            title: "Find Your Perfect Roommate",
            description: "Connect with compatible roommates based on lifestyle, habits, and preferences. Say goodbye to bad matches!",
            bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
            buttonText: "Browse Profiles",
        },
        {
            title: "Safe & Verified Users",
            description: "All profiles are verified through our secure system to ensure you're connecting with real, trustworthy people.",
            bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            buttonText: "How It Works",
        },
        {
            title: "Smart Matching Algorithm",
            description: "Our system matches you based on cleanliness, schedules, hobbies, and more for harmonious living.",
            bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
            buttonText: "Take the Quiz",
        },
        {
            title: "List Your Space",
            description: "Have a room available? Find qualified roommates quickly with our premium listing options.",
            bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
            buttonText: "Post Your Listing",
        },
        {
            title: "Roommate Success Stories",
            description: "Join thousands who found their ideal living situation through our platform.",
            bgColor: "bg-gradient-to-r from-yellow-500 to-amber-600",
            buttonText: "Read Testimonials",
        }
    ]

    return (
        <div className="w-full h-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="rounded-lg shadow-xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`hero min-h-[320px] md:min-h-[380px] ${slide.bgColor} text-white`}>
                            <div className="hero-content text-center">
                                <div className="max-w-2xl flex flex-col justify-center items-center gap-3 md:gap-6">
                                    <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
                                    <p className="text-sm md:text-xl w-[60%]">{slide.description}</p>
                                    <button className="mt-4 btn btn-primary btn-active text-white btn-sm md:btn-lg md:font-bold md:w-auto">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sliders;