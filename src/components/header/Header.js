/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/landing" className="navbar-brand">Piskel-clone</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/piskel-clone" className="nav-link">Draw!</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
