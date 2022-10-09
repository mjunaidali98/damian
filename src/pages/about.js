import React from 'react'
import AboutHero from '../components/aboutHero'
import AnimatedHeading from '../components/animatedHeading'
import Blogs from '../components/blogs'
import Companies from '../components/companies'
import FAQs from '../components/faqs'
import Footer from '../components/footer'
import Notification from '../components/notification'
import Products from '../components/products'

const About = () => {
    return (
        <div className='bg-[#ECF5F9]'>
            <Notification />
            <AboutHero />
            <Blogs />
            <FAQs />
            <AnimatedHeading />
            <Products />
            <Companies />
            <Footer removeFollow />
        </div>
    )
}

export default About