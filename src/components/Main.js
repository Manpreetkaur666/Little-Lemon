import React from 'react';
import bannerimg from '../images/bannerimg.jpg';

const Main = () => {
  return (
    <div className='banner'>
         <div className='banner-left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
         </div>
         <div className='banner-right'>
            <img src={bannerimg}/>
         </div>
    </div>
  )
}

export default Main