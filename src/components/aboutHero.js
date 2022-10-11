import React from 'react'
import Menu from './common/menu'

const AboutHero = () => {
    return (
        <div className="relative w-full h-[110vh] f-f-p ">
            <img className="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0075/5951/2137/files/grab-mocha-v004-colorprof-sm_2048x.jpg?v=1637185067" alt="hero" />
            <Menu />
            <div className="absolute inset-0 w-full h-full">
                <div className="h-full space-y-2 py-10 md:py-16 lg:py-28 container mx-auto">
                    <div className="relative flex h-[90%] px-4 lg:px-20">
                        <div className="flex flex-col space-y-3 absolute bottom-0">
                            <p className="text-[26px] leading-10 font-bold f-f-p">
                                Better For You <br />
                                and The Planet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="top"></div>
                <div className="bottom-white"></div>
            </div>
        </div>
    )
}

export default AboutHero