import React from 'react';
import logo from '../images/logo.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='logo'>
          <img src={logo} />
      </div>

      <div className='doormatNav'>
        <h4>Doormat Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>

      <div className='contactDetails'>
         <h4>Contact</h4>
         <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>email</li>
         </ul>
      </div>

      <div className='socialMediaLinks'>
        <h4>Social Media Links</h4>
         <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>email</li>
         </ul>
      </div>
    </footer>
  )
}

export default Footer
