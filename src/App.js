import React from 'react';
import card from './Credit_Card.jpg'
import ship from './ship_creditCard.png'
import visa from './visa.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title1">CREDIT CARD</h1>

      <img className="ship" src={ship} />


      <div className="flex-container">

        <div className="flex-items">

          <p className="Numbers">7253 3256 7895 1245</p>
          <p className="Month_Year">MONTH/YEAR</p>

          <div className="Part1">
            <p className="number">5422</p>

            <div className="Part2">
              <p className="Valid_Thru">VALID<br/>THRU</p>
              <i class="fas fa-angle-right"></i>
              <p className="Date">11/50</p>
            </div>

          </div>

          <p className="Tiltle2">CARDHOLDER</p>

        </div>

        <img className="visa" src={visa} />

      </div>

    </div>
  );
}

export default App;
