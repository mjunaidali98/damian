import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Gallery = () => {
    const images = [
        "../assets/g1.png",
        "../assets/g2.png",
        "../assets/g3.png",
        "../assets/g4.png",
        "../assets/g5.png",
        "../assets/g6.png"
    ]
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
    return (
        <div className='py-20 px-11 flex items-center w-full '>
            <Swiper
                className=''
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={2.5}
                spaceBetween={32}
                breakpoints={breakPoints}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
            >
                <div className='flex items-center justify-center'>
                    {images.map((item, idx) => {
                        return (
                            <SwiperSlide >
                                <img className='w-full h-full object-cover px-4' src={item} alt={`Image ${idx}`} />
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div>
    )
}

export default Gallery