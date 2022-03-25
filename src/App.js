import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  //console.log(cart);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  //console.log(guns);

  const handleAddToCart = (gun) => {
    const newGun = [...cart, gun];  //old array copy and add new array item in the array
    setCart(newGun);
  }

  return (
    <div className="App">
      <Navbar openModal={openModal} cart={cart}></Navbar>


      <div className="card-container">
        {
          guns && guns.map(gun => (
            <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>
          ))
        }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>Close</button>
        <div>
          {
            cart.map(gun => <h1 key={gun.id}>{gun.name}</h1>)
          }
        </div>
      </Modal>

    </div>
  );
}

export default App;
