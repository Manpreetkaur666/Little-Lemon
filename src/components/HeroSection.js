import React from 'react';
import heroImg from '../images/hero.jpg';

const HeroSection = () => {
  return (
   <div className='hero-section'>
        <div className='description'>
               <h1>Little Lemon</h1>
               <h2>Chicago</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <button>Reserve a table</button>
        </div>

        <div className='image'>
           <img src={heroImg} />
        </div>
   </div>
  )
}

export default HeroSection