// Available.jsx
import React from 'react';

const Available = ({player,handleSelectedPlayers}) => {
  console.log(handleSelectedPlayers)
  const { image, name, country, role, battingType, bowlingType, biddingPrice } = player;
  

  return (
    <div className="card bg-base-100 shadow-xl p-4 border">
      <figure>
        <img
          className="h-72 w-full object-cover rounded-lg"
          src={image}
          alt="player"
        />
      </figure>
      <div className="card-body">
        <div className='flex items-center gap-1'>
          <i className="fa-solid fa-user"></i>
          <h2 className="card-title">{name}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex items-center gap-1'>
            <i className="fa-solid fa-flag"></i>
            <p>{country}</p>
          </div>
          <button className="btn">{role}</button>
        </div>
        <div className="border-t">
          <h2 className="font-bold mb-2">Rating</h2>
          <div className="flex gap-4 mb-2">
            <p>{battingType}</p>
            <p>{bowlingType}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Price: ${biddingPrice}</p>
            <button onClick={()=>handleSelectedPlayers(player)} className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
