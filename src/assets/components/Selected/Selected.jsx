import React from 'react';

const Selected = ({ selectedPlayers,handleRemovePlayer,handleShowAvailablePlayers }) => {
  return (
    <div>
      <h1>Selected Players ({selectedPlayers.length}/6)</h1>
      <div className="grid grid-cols-1 gap-5">
        {selectedPlayers.length > 0 ? (
          selectedPlayers.map((player) => (
            <div key={player.playerId} className="card bg-base-100 shadow-md p-3 border flex justify-between">
              <div className="flex items-center">
                <figure>
                  <img
                    className="h-16 w-16 object-cover rounded-lg mr-4" // Smaller image size
                    src={player.image}
                    alt="player"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg">{player.name}</h2>
                  <p className="text-sm">Role: {player.role}</p>
                  <p className="text-sm">Price: ${player.biddingPrice}</p>
                </div>
              </div>
              <div className='flex justify-end'>
                <button className='btn' onClick={() => handleRemovePlayer(player.playerId)}>
                <i className="fa-solid fa-trash text-red-500 h-5 w-5"></i> {/* Delete icon */}
                </button>
              </div>
            </div>
          ))
        ) : (
          
          <p>No players selected.</p> // Message if no players are selected
        )}
      </div>
      <div className='mt-6'><button onClick={handleShowAvailablePlayers}className='btn bg-yellow-400'>Add More Player</button></div>
    </div>
  );
};

export default Selected;
