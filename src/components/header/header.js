import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/UpSurgeLogo.jpg';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="left-section">
        <a href="/">
          <img src={logo} alt="UpSurge Logo" className="logo" />
        </a>
        <nav className="nav-links">
          <a href="games">Games</a>
          <a href="#support">Support</a>
          <a href="#news">News</a>
        </nav>
      </div>

      <div className="right-section">
        <a href="https://billing.upsurgehost.com" target="_blank" rel="noopener noreferrer">
          <button className="billing-button">Billing</button>
        </a>
        <a href="https://panel.upsurgehost.com" target="_blank" rel="noopener noreferrer">
          <button className="client-button">Client Area</button>
        </a>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <a href="#games" onClick={() => setMenuOpen(false)}>Games</a>
            <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
            <a href="#news" onClick={() => setMenuOpen(false)}>News</a>
          </nav>
          <div className="mobile-buttons">
            <a href="https://billing.upsurgehost.com" target="_blank" rel="noopener noreferrer">
              <button className="billing-button">Billing</button>
            </a>
            <a href="https://panel.upsurgehost.com" target="_blank" rel="noopener noreferrer">
              <button className="client-button">Client Area</button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
