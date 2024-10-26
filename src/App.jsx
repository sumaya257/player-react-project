import { useState } from 'react';
import './App.css';
import Banner from './assets/components/Banner';
import Navbar from './assets/components/Navbar';
import BtnContainer from './assets/components/BtnContainer/BtnContainer';
import Footer from './assets/components/Footer';

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

  const handleSelectedPlayers = (player) => {
    if (selectedPlayers.length >= 6) {
      alert("You can only select up to 6 players.");
      return;
    }

    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      alert("Player already selected.");
      return;
    }

    // Convert biddingPrice to a number
    const biddingPrice = parseFloat(player.biddingPrice.replace(/,/g, ''));
    console.log('biddingPrice:', biddingPrice);
    
    if (isNaN(biddingPrice)) {
      alert("Invalid bidding price.");
      return;
    }

    if (amount < biddingPrice) {
      alert("You don't have enough coins.");
      return;
    }

    // Deduct the bidding price from the total amount
    setAmount((prevAmount) => prevAmount - biddingPrice);

    // Add player to selectedPlayers
    setSelectedPlayers((prevSelected) => {
      const updatedPlayers = [...prevSelected, player];
      alert(`Player ${player.name} has been successfully added!`);
      return updatedPlayers;
    });
  };

  const handleShowAvailablePlayers = () => {
    handleIsActiveState('Available');
  };

  const handleRemovePlayer = (playerId) => {
    // Find the player being removed
    const playerToRemove = selectedPlayers.find((player) => player.playerId === playerId);
    
    if (playerToRemove) {
      // Convert biddingPrice to a number and add it back to the total amount
      const biddingPrice = parseFloat(playerToRemove.biddingPrice.replace(/,/g, ''));
      setAmount((prevAmount) => prevAmount + biddingPrice);
      
      // Remove the player from the selectedPlayers array
      setSelectedPlayers((prevSelected) =>
        prevSelected.filter((player) => player.playerId !== playerId)
      );
    }
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
        handleRemovePlayer={handleRemovePlayer}
        handleShowAvailablePlayers={handleShowAvailablePlayers}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
