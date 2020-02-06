import React, { useState, useEffect } from 'react';
import 'tachyons';
//import { robots as robotlist } from "./data/robots";

import SearchComponent from './components/SearchComponent';
import CardList from './components/CardList';
import './index.css'
function App() {

  const [robots, changeRobots] = useState([]);
  const [searchField, changeSearchField] = useState('');
  const url = `https://jsonplaceholder.typicode.com/users`;


  useEffect(() => {
    console.log(`rendered`)
    fetch(url).then(res => res.json()).then(res => changeRobots(res));
  }, [robots, searchField]);


  return (
    <div className="App tc">
      <h1>My Robot Contacts</h1>
      <SearchComponent
        searchField={searchField}
        changeSearchField={changeSearchField}
      />
      <CardList
        robots={robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))}
      />
    </div>
  );
}

export default App;
