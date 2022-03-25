import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  //console.log(guns);

  const handleAddToCart = (gun) => {
    const newGun = [...cart, gun];
    setCart(newGun);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        {
          cart.map(gun => <h1 key={gun.id}>{gun.name}</h1>)
        }
      </div>
      <div className="card-container">
        {
          guns && guns.map(gun => (
            <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
