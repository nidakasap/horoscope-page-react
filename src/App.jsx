import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import HoroscopeList from './components/main/HoroscopeList';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <Search />}
      {activePage === 'horoscope-list' && <HoroscopeList />}
    </div>
  );
};

export default App;
