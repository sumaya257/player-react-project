/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BtnContainer.css'
import Available from '../Available/Available';
import Selected from '../Selected/Selected';

const BtnContainer = ({ handleIsActiveState, isActive }) => {
  return (
    <div>
    <div className="flex justify-end mb-4">
      <button
        onClick={() => handleIsActiveState('Available')}
        className={`btn ${isActive.Available ? 'active' : 'inactive'}`}>
        Available
      </button>

      <button
        onClick={() => handleIsActiveState('Selected')}
        className={`btn ${!isActive.Available ? 'active' : 'inactive'} ml-2`}>
        Selected
      </button>
    </div>

   {isActive.Available?<Available></Available>:<Selected></Selected>}
    </div>


  );
};

export default BtnContainer;
