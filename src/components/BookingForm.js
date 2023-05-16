import React, {useState, useReducer, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {seededRandom, fetchAPI, submitAPI} from  './API';


const BookingForm = () => {

    const navigate = useNavigate();
    const [bookingDate, setBookingdate] = useState("");
    const dateInputRef = useRef(null);
   const [bookingTime, setBookingTime] = useState("");
//    const [availableTimes, setAvailableTimes] = useState([]);
   
// const [booking, setBooking] = useState({
//     date: '',
//     time: '',
//     guest: '',
//     occasion: '',
// })

   const updateTimes = (availableTimes, action) => {
    // handle the state change
    // change the availableTimes based on the selected date
    switch(action.type) {
        case 'setTime' :
            return {
                ...availableTimes,
                bookingTime: action.bookingTime
            }
    }
   }

   const initializeTimes = () => {
      //create the initial state for the availableTimes
      const initialTime = [
        20,
        21,
        22
      ]
      return initialTime
   }

     const handleChange = (e) => {
        setBookingdate(e.target.value);
     }

   const submitHandler = (e) => {
          e.preventDefault();
          navigate('/success');
   }

   const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

   const handleTimeChange = (bookingTime) => {
    dispatch({type: 'setTime', bookingTime});
   }

   useEffect(() => {
  
    fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
     .then((response) => response.json())
   }, []);


    return (
        <>
            <form method="POST" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="booking_date">Booking Date</label>
                    <input type="date" id="booking_date" name="booking_date" value={bookingDate} onChange={handleChange} ref={dateInputRef} required />
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={availableTimes.initialTimes} onChange={handleTimeChange} required>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="booking_people">Number of People</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" required/>
                </div>
                <div>
                    <label htmlFor="booking_occasion">Ocassion</label>
                    <input id="booking_ocassion" name="booking_occasion" list="ocassion" required />
                    <datalist id="ocassion">
                        <option value="Birthday"></option>
                        <option value="Anniversary"></option>
                        <option value="Other"></option>
                    </datalist>
                </div>
                <div>
                    <label htmlFor="booking_loacation">Location</label>
                    <input id="booking_location" name="booking_location" list="locations" required />
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
        </>
    )
}

export default BookingForm