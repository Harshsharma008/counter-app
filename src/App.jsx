import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App() {
   // react give certain rule to change in the UI , we cannot change the UI without using the hooks
  // but we can change the console output without using hooks*********
  // we have to follow such standard to change the data in the UI
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
