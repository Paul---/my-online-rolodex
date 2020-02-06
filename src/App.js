import React, { useState, useEffect } from 'react';
import 'tachyons';

import SearchComponent from './components/SearchComponent';
import CardList from './components/CardList';
import Scroller from './components/Scoller';

import './index.css'
function App() {

  const [robots, changeRobots] = useState([]);
  const [searchField, changeSearchField] = useState('');
  const url = `https://jsonplaceholder.typicode.com/users`;


  useEffect(() => {
    console.log(`rendered`)
    fetch(url).then(res => res.json()).then(res => changeRobots(res));
  },[url]);


  return (
    <div className="App tc">
      <h1>My Robot Contacts</h1>
      <SearchComponent
        searchField={searchField}
        changeSearchField={changeSearchField}
      />
      <Scroller>
        {
          !robots.length ? <h1>Loading Contacts</h1> :
            <CardList
              robots={robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))}
            />
        }
      </Scroller>
    </div>
  );
}

export default App;
