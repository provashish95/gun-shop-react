import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  console.log(guns);

  const handleAddToCart = (id) => {
    console.log(id);
  }

  return (
    <div className="App">
      <Navbar></Navbar>

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
