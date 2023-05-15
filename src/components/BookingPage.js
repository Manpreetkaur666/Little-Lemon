import React, { useState, useReducer } from 'react';
import bannerimg from '../images/bannerimg.jpg';
import BookingForm from './BookingForm';

const BookingPage = () => {

   

   // const submitHandler = (e) => {
   //    e.preventDefault();
   // }

   return (
      <div className='main'>
         <h1>Book a Table</h1>
         <BookingForm />
      </div>
   )
}

export default BookingPage