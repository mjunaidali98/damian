import React from "react"
import Marquee from "react-fast-marquee";

const Notification = () => {
    return (
        <div className="h-8 bg-black w-full flex items-center ">
            <Marquee children={50} gradient={false}>
                <div className="w-full h-full flex space-x-6 items-center justify-center overflow-auto" >
                    <div className="text-[15px] leading-[14px] text-white font-bold flex items-center justify-center h-full">
                        {[...new Array(3)].map((item, idx) => {
                            return (
                                <React.Fragment>
                                    <p key={idx} className="p-2">
                                        Save up to 15% with <span role={"button"} className="underline">Subscribe &amp; Save</span>
                                    </p>
                                    <p key={idx} className="p-2">
                                        Free Shipping on Order $50+
                                    </p>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default Notification