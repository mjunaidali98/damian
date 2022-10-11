import React, { useState } from 'react'

const Faqs = () => {
    const [ans, setAns] = useState(null);
    const faq = [
        {
            q: `Do Slate products require refrigeration`,
            ans: `Do Slate products require refrigeration?`,
        },
        {
            q: `Why is Slate lactose free?`,
            ans: `Our total supply is 6000. A handful will be set aside for giveaways and promotion.`,
        },

        {
            q: ` Is Slate all-natural?`,
            ans: `Milk price is $30 (& dark chocolate)`,
        },
        {
            q: `What’s Slate’s process?`,
            ans: `What’s Slate’s process?`,
        },
        {
            q: `What does it taste like?`,
            ans: `What does it taste like?`,
        },
    ];
    return (
        <div>
            <div className='w-full flex justify-center pt-6'>
                <h1 className='f-f-p font-bold text-[25px] leading-[30px] text-center max-w-[524px] my-20'>
                    From Kickstarter, to Shark Tank,
                    to hundreds of thousands of households,
                    our goal is to provide delicious strength and energy to healthy-minded folks worldwide.
                </h1>

            </div>
            <div className='flex items-center justify-center relative'>
                <iframe
                    width="90%"
                    height="720"
                    src="https://www.youtube.com/embed/U1dXGpEJgS4"
                    title="Slate Milk Pump Up Speech"
                    frameborder="0"
                    allow=""
                    allowfullscreen>
                </iframe>
            </div>
            <div className="mx-auto container px-4 xl:px-0 mt-20">
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-11/12 xl:w-9/12 2xl:w-8/12 ">
                        <div className="flex flex-col items-center justify-center">
                            <p
                                id="faq"
                                className="text-black f-f-p text-xl leading-10 font-black  my-10"
                            >
                                FAQs
                            </p>
                            <div className=" w-full f-f-p">
                                {faq.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            id={`${i}ch`}
                                            onClick={() => {
                                                ans === i ? setAns(null) : setAns(i);
                                            }}
                                            className={` h-20 flex flex-col justify-center border-t border-black cursor-pointer flex-shrink-0 w-full rounded-10 px-6 md:px-8 xl:px-10 transition-all ease-in-out duration-300`}
                                        >
                                            <div className="flex items-start text-base font-bold text-black w-full justify-between transition-all ease-in-out duration-300">
                                                <p>{item.q}</p>
                                                <p className="2xl:ml-4">{ans === i ? "-" : "+"}</p>
                                            </div>
                                            {ans === i && (
                                                <p
                                                    style={{ color: "#000" }}
                                                    className={` text-xs sm:mt-3 lg:leading-150`}
                                                >
                                                    {item.ans}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faqs