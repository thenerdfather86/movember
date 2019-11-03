import React from 'react';
import pic1 from './images/1.png';
import QRCode from './images/QR-Code.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic1} className="App-image" alt="pic1" />
        <p>
          Enjoy the smoothness. Ending soon...
        </p>
        <a
          className="App-link"
          href="https://ca.movember.com/about/foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          #Movember
        </a>
        <h3>
          To Donate:
        </h3>
        <img src={QRCode} className="App-qr" alt="QR-Code" />
        <a
          className="App-link"
          href="https://mobro.co/14078463?mc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Mospace
        </a>
      </header>
    </div>
  );
}

export default App;
