import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React-Toastify
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
      toast.error("You can only select up to 6 players."); // Use toast.error instead of alert
      return;
    }

    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.warning("Player already selected."); // Use toast.warning instead of alert
      return;
    }

    // Convert biddingPrice to a number
    const biddingPrice = parseFloat(player.biddingPrice.replace(/,/g, ''));
    console.log('biddingPrice:', biddingPrice);
    
    if (isNaN(biddingPrice)) {
      toast.error("Invalid bidding price."); // Use toast.error instead of alert
      return;
    }

    if (amount < biddingPrice) {
      toast.error("You don't have enough coins."); // Use toast.error instead of alert
      return;
    }

    // Deduct the bidding price from the total amount
    setAmount((prevAmount) => prevAmount - biddingPrice);

    // Add player to selectedPlayers
    setSelectedPlayers((prevSelected) => {
      const updatedPlayers = [...prevSelected, player];
      toast.success(`Player ${player.name} has been successfully added!`); // Use toast.success instead of alert
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
      toast.info(`Player ${playerToRemove.name} has been removed.`); // Notification for removed player
    }
  };

  return (
    <div className="container mx-auto px-4">
      <ToastContainer 
        position="top-center" // Position the toast at the top-center
        autoClose={3000} // Automatically close the toast after 3 seconds
        hideProgressBar={false} // Show progress bar
        closeOnClick // Allow closing the toast on click
        pauseOnHover // Pause on hover
        draggable // Allow dragging
        theme="colored" // Use colored theme for better visibility
      />
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
      <Footer />
    </div>
  );
}

export default App;
