import React, { useEffect, useState } from 'react';
import Available from '../Available/Available';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./players.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);
  console.log(players)

  return (
    <div>
      <Available players={players} />
    </div>
  );
};

export default Players;
