import React, { useState } from 'react';
import './App.css';
import pigDefault from './assets/MoodengImg.jpg';
import watermelonImg from './assets/WaterMelonImg.jpg';
import pumpkinImg from './assets/PumpkinImg.jpg';
import grassImg from './assets/GlassImg.jpg';
import V from './assets/V.jpg';

function App() {
  const [level, setLevel] = useState(0); 

  const feedPig = (points) => {
    setLevel(prevLevel => prevLevel + points);
  };

  const resetLevel = () => {
    setLevel(0);
  };

  const getPigImage = () => {
    if (level >= 100) {
      return V;
    }
    return pigDefault;
  };

  const getPigSize = () => {
    return 300 + level * 2;
  };

  return (
    <div className="App">
      <h1>เกมเลี้ยงหมูเด้ง</h1>
      <h2>Level: {level}</h2>

      <img src={getPigImage()} alt="หมูเต๋า" width={getPigSize()} />

      <div className="food-container">
        <div className="food-item" onClick={() => feedPig(5)}>
          <img src={watermelonImg} alt="แตงโม" />
          <p>แตงโม <br />5 level</p>
        </div>

        <div className="food-item" onClick={() => feedPig(10)}>
          <img src={pumpkinImg} alt="ฟักทอง" />
          <p>ฟักทอง <br />10 level</p>
        </div>

        <div className="food-item" onClick={() => feedPig(20)}>
          <img src={grassImg} alt="หญ้า" />
          <p>หญ้า<br /> 20 level</p>
        </div>
      </div>

      <button className="reset-button" onClick={resetLevel}>Reset</button>
    </div>
  );
}

export default App;
