import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(4)
  

  function decrementCount(){
    setCount(prevCount=>prevCount - 1)
  }



  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button>+</button>
   

    </>
  );
}

export default App;
