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

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="card-container">
        {
          guns && guns.map(gun => (
            <Card key={gun.id} gun={gun}></Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
