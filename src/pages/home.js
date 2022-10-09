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
import ImageModal from "../components/common/imageModal"

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
            <ImageModal setImage={setImage} image={image} />
        </div>
    )
}

export default Home