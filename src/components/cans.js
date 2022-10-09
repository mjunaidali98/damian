import React from "react"

const Cans = () => {
    const items = [
        {
            label: "LACTOSE FREE",
            src: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/SQ-Slate_LactoseFree_Icon_6f0c67ef-c1f6-410b-9b79-8c8c31198236.mp4"
        },
        {
            label: "20G PROTEIN",
            src: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/SQ-Slate_Protein_Animated_Icon_2e571b47-dd57-4df9-b480-2a43da51705a.mp4?v=1642534444",
        },
        {
            label: "KETO FRIENDLY",
            src: "https://cdn.shopify.com/videos/c/o/v/fadae5fa31a946919df59e70abd4c440.mp4",
        },
        {
            label: "0G ADDED SUGAR",
            src: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/SQ-Slate_NoSugar_Animated_Icon_e1af3051-2206-48fb-8caf-09904a2066c2.mp4?v=1642534444",

        },
        {
            label: "1-3G NET CARBS",
            src: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/SQ-Slate_LowCarbs_Animated_Icon_3bcffc8a-a0d4-4bd9-b664-373aaeb91350.mp4?v=1642534444",
        },
        {
            label: "NATURALLY OCCURRING ELECTROLYTES",
            src: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/Slate_Electrolytes_Animated_Icon_0ab8e635-10dd-400d-b688-0d12226839bf.mp4?v=1642534444",
        },

    ]
    return (
        <React.Fragment>
            <div className=" blue-bg relative z-10">
                <div className="flex items-center justify-center flex-wrap lg:flex-nowrap px-5 lg:px-10 pt-20 pb-10">
                    {
                        items.map((item) => {
                            return (
                                <div className="flex flex-col space-y-5 items-center justify-center w-[210px] h-auto">
                                    <video
                                        className='bg-index'
                                        playsInline
                                        width={100}
                                        autoPlay
                                        muted
                                        loop
                                        src={item.src}
                                    />
                                    <label className="text-center f-i-p font-semibold  text-[15px] leading-5">
                                        {item.label}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="relative light-blue-bg py-20 z-10 px-5 lg:px-10 ">
                <div class="main-wrapper ">
                    <div className="degrade">
                        <div className="diagonal-wrapper ">
                            <div class="top1"></div>
                            <div class="bottom"></div>
                        </div>
                    </div>
                </div>
                <div className="relative z-20">
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-10 w-full">
                            <div className="w-7/12">
                                <img className=" object-cover" src="./assets/h2.png" />
                            </div>
                            <div className="w-3/12 flex flex-col space-y-4">
                                <p className="f-i-p text-base text-[#767C82] font-semibold">OUR CANS ARE</p>
                                <h1 className="text-[40px] leading-10 font-bold f-f-p">
                                    Strength in <br />
                                    Every Can.
                                </h1>
                                <p className="text-[12px] leading-[15px] text-black f-f-p">
                                Who said healthy meant sacrificing taste? Our milks and lattes have 20g protein and 0g added sugar, all while being unbelievably delicious.                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Cans