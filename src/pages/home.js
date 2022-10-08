import React from "react"
import Cans from "../components/cans"
import Hero from "../components/hero"
import Notification from "../components/notification"
import Press from "../components/press"
const Home = () => {
    return (
        <React.Fragment>
            <Notification />
            <Hero />
            <Cans />
            <Press/>
        </React.Fragment>
    )
}

export default Home