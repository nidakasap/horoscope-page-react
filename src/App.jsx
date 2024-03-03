import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/search/Search';
import HoroscopeList from './components/main/HoroscopeList';

const App = () => {
  //STATE OLUSTURUCAGIM ACTIVE PAGE DIYE
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <Header />}
      {activePage === 'horoscope-list' && <HoroscopeList />}
    </div>
  );
};

export default App;
