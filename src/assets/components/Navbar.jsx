/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from '../images/logo.png';
import coin from '../images/coin.png';

const Navbar = ({amount }) => {
  return (
    <div className='mt-4 mb-10'>
      <div className='flex justify-between'>
        <img src={img} alt="" />
        <div className='flex items-center'>
          <div className='flex'>
            <ul className='flex gap-8 mr-9'>
              <li><a href="">Home</a></li>
              <li><a href="">Fixture</a></li>
              <li><a href="">Term</a></li>
              <li><a href="">Schedules</a></li>
            </ul>
          </div>
          <button className='btn'>
            {/* Display the updated amount here */}
            <p>{amount} Coin</p> 
            <img src={coin} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
