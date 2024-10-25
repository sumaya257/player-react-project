/* eslint-disable no-unused-vars */
import React from 'react';
import './BtnContainer.css'

const BtnContainer = () => {
    return (
        <div className='flex justify-end'>
            <div><button className='btn'>Available</button></div>
            <div><button className='btn'>Selected</button></div>
        </div>
    );
};

export default BtnContainer;