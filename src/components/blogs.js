import React from 'react'

const Blogs = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 gap-10'>
                <div className='relative w-full h-full' >
                    <div className='absolute inset-0 w-full lg:w-[286px] h-full text-white'>
                        <div className='flex flex-col space-y-5 w-full h-full p-6'>
                            <p className='text-xs text-[#A9ADB1] f-i-p font-semibold'>
                                01
                            </p>
                            <h1 className='f-f-p text-3xl pr-2 font-bold'>
                                Strength in
                                Every Can.
                            </h1>
                            <p className='f-f-p text-sm'>
                                Our all-natural,
                                lactose free chocolate milks have 20g of protein,
                                0g of added sugar,
                                and contain essential vitamins and electrolytes.
                            </p>
                        </div>
                    </div>
                    <img className='w-full h-full object-cover lg:block hidden' src='https://cdn.shopify.com/s/files/1/0075/5951/2137/files/better-for-you-2_2400x.jpg?v=1620947254' />
                    <img className='w-full h-full object-cover block lg:hidden' src='https://cdn.shopify.com/s/files/1/0075/5951/2137/files/mobile-better-for-you-2_1600x.jpg?v=1620959206' />

                </div>
                <div className='relative w-full row-span-2' >
                    <div className='absolute inset-0 w-full lg:w-[286px] h-full text-black'>
                        <div className='flex flex-col space-y-5 w-full h-full p-6'>
                            <p className='text-xs text-[#767C82] f-i-p font-semibold'>
                                02
                            </p>
                            <h1 className='f-f-p text-3xl pr-2 font-bold'>
                                How It's All
                                Natural And Better
                                Tasting
                            </h1>
                            <p className='f-f-p text-sm'>
                                We ultra-filter our milk to remove its lactose sugars,
                                along with some water, to slightly concentrate the milk proteins.
                                We then blend our ultra-filtered milk with natural ingredients including allulose,
                                a rare low calorie sugar found in figs and maple syrup.
                            </p>
                        </div>
                    </div>
                    <img className='w-full h-full object-cover' src='https://cdn.shopify.com/s/files/1/0075/5951/2137/files/mobile-choco-pour-v003_1600x.jpg?v=1637181232' />
                </div>
                <div className='relative w-full h-full' >
                    <div className='absolute inset-0 w-full lg:w-[286px] h-full text-black'>
                        <div className='flex flex-col space-y-5 w-full h-full p-6'>
                            <p className='text-xs text-[#767C82] f-i-p font-semibold'>
                                03
                            </p>
                            <h1 className='f-f-p text-3xl pr-2 font-bold'>
                                How It's Better For
                                The Planet
                            </h1>
                            <p className='f-f-p text-sm'>
                                We are on a mission to help reduce water usage and increase the reusability of material products.
                                Through ultra-filtration,
                                we remove some water from our milk.
                                This excess water is sent back to our family-owned farms to be reused in their everyday processes.
                                Along with this,
                                Slate is packaged in 100% recyclable aluminum cans and is a proud Certified Plastic Neutral company.
                                Our goal is to make this beautiful planet a little bit happier and a little bit healthier,
                                one can at a time.


                            </p>
                        </div>
                    </div>
                    <img className='w-full h-full object-cover lg:block hidden' src='https://cdn.shopify.com/s/files/1/0075/5951/2137/files/world-2_2400x.jpg?v=1620948277' />
                    <img className='w-full h-full object-cover block lg:hidden' src='https://cdn.shopify.com/s/files/1/0075/5951/2137/files/world-4-mobile_1600x.jpg?v=1620948442' />
                   
                </div>
            </div>
        </div>
    )
}

export default Blogs