import React from 'react';
import bannerimg from '../images/bannerimg.jpg';

const Booking = () => {
  return (
    <div className='main'>
  
    <h1>Book a Table</h1>
      <form method="POST">
         <div>
            <label for="booking_date">Booking Date</label>
            <input type="date" id="booking_date" name="booking_date" />
         </div>
         <div>
            <label for="booking_people">Number of People</label>
            <input type="range" id="booking_people" name="booking_people" min="1" max="7" value="4" oninput="this.nextElementSibling.value = this.value" />
            <output>4</output>
         </div>
         <div>
            <label for="booking_loacation">Location</label>
            <input id="booking_location" name="booking_location" list="locations" />
            <datalist id="locations">
                <option value="Mississauga"></option>
                <option value="Toronto"></option>
                <option value="Barrie"></option>
                <option value="Ottawa"></option>
            </datalist>
         </div>
         <div>
            <fieldset id="dinning_option">
                <label>
                    <input type="radio" id="dinning_option" value="indoors" name="dinning_option" /> Indoors
                </label>
                 <label> 
                    <input type="radio" id="dinning_option" value="outdoor" name="dinning_option" /> Outdoor
                 </label>       
            </fieldset>
         </div>
         <button className='btnBookNow'>Book Now</button>
      </form>
    </div>
  )
}

export default Booking