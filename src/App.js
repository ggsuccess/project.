import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

const App = () => {
  return (
    <div className="App">
      <Row title="Netfilx Originals" fetchUrl={requests.fetchNetfilxOriginal} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
