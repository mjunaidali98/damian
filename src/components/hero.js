
import React from "react"

const Hero = () => {
    return (
        <div className="relative w-full h-[105vh] f-f-p ">
            <img className="w-full h-full" src="./assets/h1.png" alt="hero" />
            <div className="absolute inset-0 w-full">
                <div className="container mx-auto px-14 lg:px-20 flex justify-between font-medium text-[15px] leading-10">
                    <div className="flex justify-center items-center space-x-5">
                        <a role={"button"} href="/">Shop</a>
                        <a role={"button"} href="/">Subscribe &amp; Save</a>
                    </div>
                    <img role={"img"} className="h-14 w-16" alt="logo" src="./assets/logo2x.png" />
                    <div className="flex justify-center items-center space-x-10">
                        <div className="flex justify-center items-center space-x-3">
                            <a role={"button"} href="/">About</a>
                            <a role={"button"} href="/">Find Stores</a>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <a role={"button"} href="/">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3.5C11 5.433 9.20914 7 7.00001 7C4.79085 7 3 5.433 3 3.5C3 1.567 4.79085 0 7.00001 0C9.20914 0 11 1.567 11 3.5Z" fill="black" />
                                    <path d="M0.575517 11.7044C1.76613 10.6716 4.13563 9 7.00003 9C9.86435 9 12.2339 10.6716 13.4245 11.7044C13.9559 12.1653 14.1217 12.9446 13.9118 13.6535L13.6255 14.6208C13.382 15.4434 12.6863 16 11.9017 16H2.09829C1.31368 16 0.618065 15.4434 0.374526 14.6208L0.088156 13.6535C-0.121712 12.9446 0.0440679 12.1653 0.575517 11.7044Z" fill="black" />
                                </svg>


                            </a>
                            <a role={"button"} href="/">
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.644416 4.66675H11.3552L11.9947 12.4685C12.0623 13.293 11.4223 14 10.6085 14H1.39111C0.577314 14 -0.0626811 13.293 0.00490094 12.4685L0.644416 4.66675Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.93947 3.88887C2.51694 3.88887 2.16643 3.53714 2.24994 3.11606C2.60248 1.33852 4.14732 0 5.99968 0C7.85201 0 9.39687 1.33852 9.74942 3.11606C9.83295 3.53714 9.48241 3.88887 9.05989 3.88887C8.63738 3.88887 8.30729 3.53109 8.16909 3.12518C7.85793 2.21157 7.0042 1.55555 5.99968 1.55555C4.99519 1.55555 4.14141 2.21157 3.83027 3.12518C3.69203 3.53109 3.36199 3.88887 2.93947 3.88887Z" fill="black" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
                <div className="h-full space-y-2 py-10 md:py-16 lg:py-28 container mx-auto">
                    <div className="relative flex h-full">
                        <div className="flex flex-col space-y-3 absolute bottom-5">
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
            <div class="section">
                <div class="top"></div>
                <div class="bottom"></div>
            </div>
        </div>
    )
}

export default Hero