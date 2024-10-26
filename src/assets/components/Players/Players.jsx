// Players.jsx
import React, { useEffect, useState } from 'react';
import Available from '../Available/Available';

const Players = ({handleSelectedPlayers}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./players.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);
  console.log(players);

  return (
    <div>
      <h1>Available Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {players.map((player) => (
          <Available key={player.playerId} handleSelectedPlayers={handleSelectedPlayers} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
