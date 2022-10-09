import React, { useState } from "react"
import Cans from "../components/cans"
import Hero from "../components/hero"
import Notification from "../components/notification"
import Press from "../components/press"
import AnimatedHeading from "../components/animatedHeading"
import Products from "../components/products";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery"
import Footer from "../components/footer"

const Home = () => {
    const [image, setImage] = useState(null);
    return (
        <div className="relative w-full h-full">
            <Notification />
            <Hero />
            <Cans />
            <Press />
            <AnimatedHeading />
            <Products />
            <Testimonials />
            <Gallery setImage={setImage} />
            <Footer />

            <div className={`absolute inset-0 w-full h-full bg-slate-900  ${image ? " bg-opacity-80 z-30" : " -z-10 opacity-0"}`}>
                <div className="w-full fixed flex items-center justify-center top-5 bottom-5">
                    <img className="w-7/12 h-full " src={image} />
                </div>
                <div className="fixed top-2 right-2">
                    <svg role={"button"} onClick={()=>setImage(null)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home