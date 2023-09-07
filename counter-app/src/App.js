import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
      counter++
      setCounter(counter)
  }
  const removeValue = () => {
    if(counter > 0){
      counter--
      setCounter(counter)
    }
  }

  return (
    <div className="App">
        <h1>Counter App</h1>
        <h2>Counter:- {counter}</h2>
        <div className='btn-cont'>
          <button className='btn'
              onClick={addValue}>Increase</button>
          <button className='btn'
              onClick={removeValue}>Decrease</button>
        </div>
        <h1 className='big-counter'>{counter}</h1>
    </div>
  );
}

export default App;
