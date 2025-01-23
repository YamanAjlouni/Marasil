import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';
import logo from '../../../assets/images/MARASIL.jpg'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-out-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left-container">
        <div className="navbar-left-buttons">
          <Link to='/admin/dashboard' className="navbar-but">للتسجيل مجاناُ</Link>
          <button className="navbar-but">تسجيل دخول</button>
          <button className="navbar-but navbar-but-english-arabic">English</button>
        </div>
      </div>

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="navbar-right-container">
        {/* Hamburger Icon for Mobile */}
        <button className="navbar-hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-right-links ${isMenuOpen ? 'navbar-mobile-open' : ''}`}>
          <Link to="/">الرئيسية</Link>
          <Link to="/pricing">الأسعار</Link>
          <Link to="/partners">الشركاء</Link>
          <Link to="/blog">المدونة</Link>
        </div>
      </div>
    </div>
  );
};