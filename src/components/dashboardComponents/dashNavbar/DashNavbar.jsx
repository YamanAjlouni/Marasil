import React, { useState } from 'react';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import './DashNavbar.scss';
import logo from '../../../assets/images/MARASIL.jpg';
import { Link } from 'react-router-dom';

export const DashNavbar = ({ onToggleSidebar }) => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <button className="navbar__hamburger" onClick={onToggleSidebar}>
          <Menu />
        </button>
        <img 
          src={logo}
          alt="Logo" 
          className="navbar__logo"
        />
      </div>

      <div className="navbar__right">
        {/* Currency Dropdown */}
        <div className="navbar__dropdown">
          <button 
            className="navbar__dropdown-trigger"
            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
          >
            USD <ChevronDown />
          </button>
          {isCurrencyOpen && (
            <ul className="navbar__dropdown-content">
              <li>USD</li>
              <li>EUR</li>
              <li>GBP</li>
            </ul>
          )}
        </div>

        {/* Language Button */}
        <button className="navbar__lang-btn">
          <Globe />
          العربية
        </button>

        {/* User Menu */}
        <div className="navbar__dropdown">
          <button 
            className="navbar__dropdown-trigger"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            Account <ChevronDown />
          </button>
          {isUserMenuOpen && (
            <ul className="navbar__dropdown-content">
              <li>Settings</li>
              <Link to='/' className="navbar__logout">Logout</Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
