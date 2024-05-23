import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter(counter + 1);
  }

  return (
    <main>
      <button onClick={handleIncrease}>Öka med 1</button>
      <p data-testid='amount'>{counter}</p>
    </main>
  );
}

export default App;
