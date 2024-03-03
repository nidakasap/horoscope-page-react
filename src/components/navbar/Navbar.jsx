import React from 'react';
import './Navbar.scss';
import logo from '../../img/logo.png';

const Navbar = ({ activePage, setActivePage }) => {
  const handleClick = page => {
    setActivePage(page);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} onClick={() => handleClick('home')} />
      </div>
      <ul className="menu">
        <li>
          <a href="#one" className="link" onClick={() => handleClick('horoscope-list')}>
            Daily Horoscope
          </a>
        </li>
        <li>
          <a href="#two" className="link">
            Tarot
          </a>
        </li>
        <li>
          <a href="#three" className="link">
            Astrology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
