import React from 'react';
import './BtnContainer.css';
import Selected from '../Selected/Selected';
import Players from '../Players/Players';

const BtnContainer = ({ handleIsActiveState, isActive, selectedPlayers, handleSelectedPlayers,handleRemovePlayer, handleShowAvailablePlayers}) => {
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
          Selected ({selectedPlayers.length})
        </button>
      </div>

      {isActive.Available ? (
        <Players handleSelectedPlayers={handleSelectedPlayers} /> // Pass handleSelectedPlayers to Players
      ) : (
        <Selected selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} handleShowAvailablePlayers={handleShowAvailablePlayers} /> // Pass selectedPlayers to Selected
      )}
    </div>
  );
};

export default BtnContainer;
