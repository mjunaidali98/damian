
import React from "react"
import Menu from "./common/menu"

const Hero = () => {
    return (
        <div className="relative w-full h-[110vh] f-f-p ">
            <img className="w-full h-full object-cover " src="https://cdn.shopify.com/s/files/1/0075/5951/2137/files/hero-dark-pour-v3-v011-cut-for_web-sm_2048x_ad8dc7f4-32f7-483b-b06c-ba0c6786a49f_2048x.webp?v=1660153483" alt="hero" />
            <Menu />
            <div className="absolute inset-0 w-full h-full">
                <div className="h-full space-y-2 py-10 md:py-16 px-10 lg:py-28 container mx-auto">
                    {/*     padding: 45px 50px 45px 20px; */}
                    <div className="relative flex h-full">
                        <div className="flex flex-col space-y-3 absolute bottom-8">
                            <p className="text-[40px] leading-10 font-bold f-f-p">
                                Strength in <br />
                                Every Can.
                            </p>
                            <p className="text-lg f-f-p">High Protein Chocolate Milks and Lattes</p>
                            <div>
                                <button className=" bg-black px-6 py-2 rounded-lg text-white font-bold">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div  className="top"></div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}

export default Hero