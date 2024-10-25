import { useState } from 'react';
import './App.css';
import Banner from './assets/components/Banner';
import Navbar from './assets/components/Navbar';
import BtnContainer from './assets/components/BtnContainer/BtnContainer';


function App() {
  const [amount, setAmount] = useState(0);
  
  const [isActive, setIsActive] = useState({
    Available: true,
    status: 'active'
  });

  const handleFreeCredit = () => {
    setAmount(amount + 600000);
    console.log('got', amount + 600000);
  };

  const handleIsActiveState = (status) => {
    setIsActive({
      Available: status === 'Available',
      status: status === 'Available' ? 'active' : 'inactive'
    });
  };
console.log(isActive)
  return (
    <div className='container mx-auto px-4'>
      <Navbar amount={amount} />
      <Banner handleFreeCredit={handleFreeCredit} />
      <BtnContainer isActive={isActive} handleIsActiveState={handleIsActiveState} />
    </div>
  );
}

export default App;
