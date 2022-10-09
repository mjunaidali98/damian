import React from 'react'

const Products = () => {
    const items = [
        {
            front_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/var-pad-5_720x480.png?v=1636990858",
            bg_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/var-box-v3-v001_1440x960.png?v=1636990889",
            color: "#262322"
        },
        {
            front_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/choc-pad-3_720x480.png?v=1636990843",
            bg_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/classic-choco-turn-v3-v001_1440x960.png?v=1636990558",
            color: '#7d3d2d'
        },
        {
            front_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/dark-pad-2_720x480.png?v=1620942327",
            bg_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/dakr-turn-7_1440x960.png?v=1621004502",
            color: "#3e2b2f"
        },
        {
            front_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/mocha-pad-3_720x480.png?v=1636990801",
            bg_image: "https://cdn.shopify.com/s/files/1/0075/5951/2137/files/mocha-turn-v3-v001_1440x960.png?v=1636990607",
            color: "#a87b59"
        }
    ]
    return (
        <div className="bg-white">
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-11'>
                {items.map((item) => {
                    return (
                        <div className='relative w-full h-full group'>
                            <div className='w-full h-full flex-1'>
                                <div style={{ backgroundColor: item.color }} className={`pb-[138%] relative overflow-hidden cursor-pointer z-10`}>
                                    <div className='absolute inset-0 w-full h-full' >
                                        <img className='absolute -top-[8%] left-4 scale-[2] z-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 object-cover object-center' src={item.bg_image} />
                                        <img className='absolute z-10 group-hover:z-0 opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-300 object-cover w-full' src={item.front_image} alt="Slate Milk presentation" />
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-[30px] left-0 right-0 w-full z-10 '>
                                <div className='flex w-full items-center justify-center'>
                                    <a id='button' className=" relative px-4 py-2 rounded-lg font-lg font-bold text-center w-[220px] text-black border-2 border-white " href="https://slatemilk.com/products/chocolate-milk-trellis?variant=39320513970270" >
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products