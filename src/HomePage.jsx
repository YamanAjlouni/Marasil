import React from 'react'
import { Intro } from './pages/mainPage/intro/Intro'
import { MechOfWork } from './pages/mainPage/mechOfWork/MechOfWork'
import { WhyMarasil } from './pages/mainPage/whyMarasil/WhyMarasil'
import { ShipmentsSection } from './pages/mainPage/ShipmentsSection/ShipmentsSection'
import { Navbar } from './components/mainComponents/navbar/Navbar'
import { Footer } from './components/mainComponents/footer/Footer'

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <MechOfWork />
            <WhyMarasil />
            <ShipmentsSection />
            <Footer />
        </div>
    )
}
