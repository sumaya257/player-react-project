import { useState } from 'react';
import './App.css';
import Banner from './assets/components/Banner';
import Navbar from './assets/components/Navbar';
import BtnContainer from './assets/components/BtnContainer/BtnContainer';
import Available from './assets/components/Available/Available';

function App() {
  const [amount, setAmount] = useState(0);

  //btn toggling
  const[isActive, setIsActive] = useState({
    Available: true,
    status:'active'
})
// console.log(isActive)

const handleFreeCredit = () => {
    setAmount(amount + 600000)
    console.log('got',amount + 600000)
  };

  //btn toggling handler
  
  
  return (
    <div className='container mx-auto px-4'>
      <Navbar amount={amount} />
      <Banner handleFreeCredit={handleFreeCredit} />
      <BtnContainer></BtnContainer>
    </div>
  );
}

export default App;
