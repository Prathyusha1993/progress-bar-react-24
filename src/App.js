import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
    return () => clearInterval(interval);
  },[]);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
        {success ? 'Complete!' : '...Loading'}
    </div>
  );
}

export default App;
