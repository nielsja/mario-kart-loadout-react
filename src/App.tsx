import { useState } from 'react';
import './App.css';
import Selectors from './components/Selectors';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');

  return (
    <>
      <div className="container-fluid">
        <Selectors></Selectors>
      </div>
    </>
  );
}

export default App;
