import './App.css';
import { useState } from 'react';
import ColorCard from './components/ColorCard';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input 
      type="text" 
      placeholder="Search..." 
      onChange={(event) => {
        setSearchTerm(event.target.value)
      }}
      />
      <ColorCard searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
