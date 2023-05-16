import React from 'react'
import About from './About'
import HeroSection from './HeroSection'
import Highlights from './Highlights'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <main>
     <HeroSection />
    <Highlights />
    <Testimonials />
    <About />
    </main>
   
  )
}

export default Home