import React, { useState, useEffect } from 'react';
import 'tachyons';

import SearchComponent from './components/SearchComponent';
import CardList from './components/CardList';
import Scroller from './components/Scoller';
import ErrorBoundary from './components/ErrorBoundary';

import './index.css'
function App() {

  const [contacts, changeContacts] = useState([]);
  const [searchField, changeSearchField] = useState('');
  const url = `https://randomuser.me/api/?results=100`;


  useEffect(() => {
    fetch(url).then(res => res.json()).then(res => {
      const { results } = res;
      changeContacts(results)
    } )
      .catch(e => console.log(`Error`));
  }, [url]);

  setTimeout(() => {
    console.log(contacts.results)
  }, 3000);

  return (
    <div className="App tc">
      <h1>My Online Rolodex</h1>
      <h5>Filter your contact list by typing in the search bar below.</h5>
      <SearchComponent
        searchField={searchField}
        changeSearchField={changeSearchField}
      />
      <Scroller>
        {
          !contacts.length ? <h1>Loading Contacts</h1> : <ErrorBoundary>
            <CardList
              contacts={contacts.filter(contact => {
                return contact.name.first.toLowerCase().includes(searchField.toLowerCase()) || contact.name.last.toLowerCase().includes(searchField.toLowerCase())
              }
                )}
            />
          </ErrorBoundary>

        }
      </Scroller>
    </div>
  );
}

export default App;
