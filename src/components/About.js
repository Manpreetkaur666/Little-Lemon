import React from 'react';
import aboutImg1 from '../images/aboutImg1.jpg';
import aboutImg2 from '../images/aboutImg2.jpg';

const About = () => {
  return (
    <div className='about-section'>
        <div className='description'>
               <h1>Little Lemon</h1>
               <h2>Chicago</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
        </div>

        <div className='image-stack'>
           <img className='aboutImg1' src={aboutImg1} />
           <img className='aboutImg2' src={aboutImg2} />
        </div>
   </div>
  )
}

export default About