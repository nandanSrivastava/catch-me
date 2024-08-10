import { useState, useEffect } from 'react';
import './App.css';
import smile from './assets/smile.png';

function App() {
  const [currPosition, setCurrPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = ev => {
      const isNearX = Math.abs(currPosition.x - ev.clientX) <= 40;
      const isNearY = Math.abs(currPosition.y - ev.clientY) <= 40;

      if (isNearX && isNearY) {
        const newX = Math.floor(Math.random() * window.innerWidth);
        const newY = Math.floor(Math.random() * window.innerHeight);
        setCurrPosition({ x: newX, y: newY });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [currPosition]);

  return (
    <>
    
      <h1 className='mainName'>Catch Me</h1>
      <div className='smileFace' style={{ position: 'absolute', left: currPosition.x, top: currPosition.y }}>
        <img src={smile} alt="SMILE EMOJI" height={40} width={40} />
      </div>
    </>
  );
}

export default App;