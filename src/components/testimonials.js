import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
    const [breakPoints] = React.useState({
        120: {
            slidesPerView: 0.5,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1.09,
            spaceBetween: 20
        },
        380: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2.2,
            spaceBetween: 32
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 32
        },
        1024: {
            slidesPerView: 3.2,
            spaceBetween: 32
        },
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 32
        },
        1536: {
            slidesPerView: 3.8,
            spaceBetween: 32
        },
        1800: {
            slidesPerView: 4.2,
            spaceBetween: 32
        },
        2100: {
            slidesPerView: 4.5,
            spaceBetween: 32
        },
    })
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const items = [
        {
            icon: "./assets/t1.png",
            name: "Alexander Mattison",
            designation: "NFL RUNNING BACK",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”",

        }, {
            icon: "./assets/t2.png",
            name: "Miranda “Fear The” Maverick",
            designation: "UFC FIGHTER",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”"
        },
        {
            icon: "./assets/t3.png",
            name: "Alexander Mattison",
            designation: "SPORT NUTRITIONIST",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”",

        }, {
            icon: "./assets/t1.png",
            name: "Alexander Mattison",
            designation: "NFL RUNNING BACK",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”",

        }, {
            icon: "./assets/t2.png",
            name: "Miranda “Fear The” Maverick",
            designation: "UFC FIGHTER",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”"
        },
        {
            icon: "./assets/t3.png",
            name: "Alexander Mattison",
            designation: "SPORT NUTRITIONIST",
            description: "“If I were you I'd go ahead and get me some Slate. It's fire, it's nutritious, and it's delicious.”",

        }
    ]
    return (
        <div className='py-16 bg-white'>
            <p className="f-i-p text-base text-[#767C82] font-semibold uppercase text-center py-10">Testimonials</p>
            <div className='py-10 px-10 relative'>
                <div className='absolute top-0 bottom-0 left-0'>
                    <div className='flex w-full h-full justify-center items-center relative z-10'>
                        <button ref={navigationPrevRef} role={"button"} className='prev appearance-none focus:outline-none h-10 w-10 bg-white shadow-xl drop-shadow-lg flex items-center justify-center'>
                            <svg className='' width="14" height="14" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.8 0L4.5 0.7L1.9 3.5H11V4.5H1.8L4.5 7.3L3.8 8L0 4L3.8 0Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='absolute top-0 bottom-0 right-0'>
                    <div className='flex w-full h-full justify-center items-center relative z-10'>
                        <button ref={navigationNextRef} role={"button"} className='next appearance-none focus:outline-none h-10 w-10 bg-white shadow-xl drop-shadow-lg flex items-center justify-center'>
                            <svg className='' width="14" height="14" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.2 0L6.5 0.7L9.1 3.5H0V4.5H9.2L6.5 7.3L7.2 8L11 4L7.2 0Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Swiper
                    className=''
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={6.5}
                    spaceBetween={32}
                    breakpoints={breakPoints}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                >

                    <div className='mx-4'>
                        {items.map((item, id) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div key={id} className='flex flex-col justify-center space-y-4 cursor-grab'>
                                        <img className='object-cover h-[197px]' alt='company logo' src={item.icon} />
                                        <p className='f-i-p text-xl leading-4 font-bold'>
                                            {item.name}
                                        </p>
                                        <p className='text-xs leading-4 text-[#878C92] f-i-p'>{item.designation}</p>
                                        <p className='f-f-v text-base text-[#1B1B1B] font-normal w-[70%]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </div>
                </Swiper>
            </div>
            <style>
                {`
                        button:disabled,
                        button[disabled]{
                          color: #cccccc;
                          visibility:hidden;
                        }
                    `}
            </style>
        </div>

    )
}

export default Testimonials;