/* eslint-disable react/no-unknown-property */
import React from 'react';

const Available = ({ players }) => {
  return (
    <div>
      <h1>Available Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {players.map((player) => (
          <div key={player.playerId} className="card bg-base-100 shadow-xl p-4 border">
            <figure>
              <img
                className="h-72 w-full object-cover rounded-lg"
                src={player.image}
                alt="player"
              />
            </figure>
            <div className="card-body">
            <div className='flex items-center gap-1'>
             <i class="fa-solid fa-user"></i>
              <h2 className="card-title">{player.name}</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className='flex items-center gap-1'>
                <i class="fa-solid fa-flag"></i>
                <p>{player.country}</p>
                </div>
                <button className="btn">{player.role}</button>
              </div>
              <div className="border-t">
                <h2 className="font-bold mb-2">Rating</h2>
                <div className="flex gap-4 mb-2">
                  <p>{player.battingType}</p>
                  <p>{player.bowlingType}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Price: ${player.biddingPrice}</p>
                  <button className="btn">Choose Player</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
