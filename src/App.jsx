import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  // const

  const counterIncrease = () => {
    count = count + 1;
    setCount(count);
  };

  const decrease = () => {
    if(count==0) setCount(0);
    else{
    count = count - 1;
    setCount(count);
    }
  };

  return (
    <>
    
        <h1 style={{ color: 'lightblue' }}> React Counter app</h1>
        <button
          style={{ backgroundColor: 'lightblue', color: 'black' }}
          onClick={counterIncrease}
        >
          Increase
        </button>
        <p style={{ color: 'lightblue' }}>{count}</p>
        <button
          style={{ backgroundColor: 'lightblue', color: 'black' }}
          onClick={decrease}
        >
          Decrease
        </button>
    
    </>
  );
}

export default App;
