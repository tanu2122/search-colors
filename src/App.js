import Masonry from 'react-masonry-css';
import './App.css';
import JsonData from './MOCK_DATA.json'
import { useState } from 'react';
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
      
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
      {JsonData.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.color_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }}).map((val, key) => {
        return <div style={{
        backgroundColor: val.color_code
      }}>
        <div>{val.color_name}</div>
        <div>{val.color_code}</div>
        </div>
        ;
      })}
      </Masonry>
    </div>
  );
}

export default App;
