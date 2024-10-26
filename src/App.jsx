import { useState } from 'react';
import './App.css';
import Banner from './assets/components/Banner';
import Navbar from './assets/components/Navbar';
import BtnContainer from './assets/components/BtnContainer/BtnContainer';
import Players from './assets/components/Players/Players';

function App() {
  const [amount, setAmount] = useState(0);
  const [isActive, setIsActive] = useState({
    Available: true,
    status: 'active',
  });
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleFreeCredit = () => {
    setAmount((prevAmount) => prevAmount + 6000000);
  };

  const handleIsActiveState = (status) => {
    setIsActive({
      Available: status === 'Available',
      status: status === 'Available' ? 'active' : 'inactive',
    });
  };

    // **Modified Function to handle player selection**
    const handleSelectedPlayers = (player) => {
      if (selectedPlayers.length >= 6) {
        alert("You can only select up to 6 players.");
        return; // Stop if already 6 players selected
      }
      
      if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
        alert("Player already selected.");
        return; // Stop if the player is already selected
      }
  
      setSelectedPlayers((prevSelected) => [...prevSelected, player]);
      console.log("Selected players:", selectedPlayers);
    };
  

   // **New Function to show Available Players**
   const handleShowAvailablePlayers = () => {
    handleIsActiveState('Available');
  };

  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers((prevSelected) => 
      prevSelected.filter((player) => player.playerId !== playerId)
    );
  };
  

  return (
    <div className="container mx-auto px-4">
      <Navbar amount={amount} />
      <Banner handleFreeCredit={handleFreeCredit} />
      <BtnContainer 
     isActive={isActive} 
     handleIsActiveState={handleIsActiveState} 
     selectedPlayers={selectedPlayers} 
     handleSelectedPlayers={handleSelectedPlayers} 
     handleRemovePlayer={handleRemovePlayer} // Pass the function here
     handleShowAvailablePlayers={handleShowAvailablePlayers}
    />

    </div>
  );
}

export default App;
