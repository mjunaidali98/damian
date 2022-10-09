import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Press = () => {
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
            slidesPerView: 3.5,
            spaceBetween: 32
        },
        1280: {
            slidesPerView: 4.5,
            spaceBetween: 32
        },
        1536: {
            slidesPerView: 5.5,
            spaceBetween: 32
        },
        1800: {
            slidesPerView: 6.5,
            spaceBetween: 32
        },
        2100: {
            slidesPerView: 7.5,
            spaceBetween: 32
        },
    })
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const items = [{
        icon: "./assets/reviewed.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”",

    }, {
        icon: "./assets/rs.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”"
    },
    {
        icon: "./assets/reviewed.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”",

    }, {
        icon: "./assets/rs.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”"
    },
    {
        icon: "./assets/reviewed.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”",

    }, {
        icon: "./assets/rs.png",
        text: "“Slate, which makes lactose-free chocolate milk, as another promising startup. Slate products, which are sold in aluminum cans, have much less sugar than regular chocolate milk, and more protein.”"
    }
    ]
    return (
        <div className='py-16'>
            <p className="f-i-p text-base text-[#767C82] font-semibold uppercase text-center">Press</p>
            <div className='py-5 '>
                <Swiper
                    className='relative flex w-full items-center justify-center'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={6.5}
                    loop={true}
                    spaceBetween={32}
                    breakpoints={breakPoints}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                >

                    <div className='absolute top-0 bottom-0 left-0'>
                        <div className='flex w-full h-full justify-center items-center relative z-10'>
                            <button ref={navigationPrevRef} role={"button"} className='prev appearance-none focus:outline-none h-10 w-10 bg-white shadow-xl drop-shadow-lg flex items-center justify-center mx-2'>
                                <svg className='' width="14" height="14" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.8 0L4.5 0.7L1.9 3.5H11V4.5H1.8L4.5 7.3L3.8 8L0 4L3.8 0Z" fill="black" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className='absolute top-0 bottom-0 right-0'>
                        <div className='flex w-full h-full justify-center items-center relative z-10'>
                            <button ref={navigationNextRef} role={"button"} className='next appearance-none focus:outline-none h-10 w-10 bg-white shadow-xl drop-shadow-lg flex items-center justify-center mx-2'>
                                <svg className='' width="14" height="14" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.2 0L6.5 0.7L9.1 3.5H0V4.5H9.2L6.5 7.3L7.2 8L11 4L7.2 0Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {items.map((item, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <div key={id} className='flex flex-col items-center cursor-grab'>
                                    <img className='object-cover' alt='company logo' src={item.icon} />
                                    <p className='text-center f-f-v text-[13px] leading-4 max-w-[252px]'>
                                        {item.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
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

export default Press