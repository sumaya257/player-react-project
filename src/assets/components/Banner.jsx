/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import bg from '../images/bg-shadow.png';
import mainImg from '../images/banner-main.png'; // Your main image

const Banner = ({handleFreeCredit}) => {
    return (
        <div className="relative h-[400px] mb-10">
            {/* Blurred background image */}
            <div 
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Main content (image and text) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                <img src={mainImg} alt="Main" className="mb-4" />
                <h1 className="text-3xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-lg mb-4">Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className='btn  bg-yellow-400' type="button"> Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;
