import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarShips from './components/StarShips';
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return (
    <div className="App">{list.map((element, index) => {
        return <StarShips name={element.name} key={index} />
      })}
    </div>
  );
}

export default App;
