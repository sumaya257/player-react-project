import React from 'react';
import './BtnContainer.css';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import Players from '../Players/Players';

const BtnContainer = ({ handleIsActiveState, isActive }) => {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => handleIsActiveState('Available')}
          className={`btn ${isActive.Available ? 'active' : 'inactive'}`}
        >
          Available
        </button>

        <button
          onClick={() => handleIsActiveState('Selected')}
          className={`btn ${!isActive.Available ? 'active' : 'inactive'} ml-2`}
        >
          Selected
        </button>
      </div>

      {isActive.Available ? <Players /> : <Selected />}
    </div>
  );
};

export default BtnContainer;
