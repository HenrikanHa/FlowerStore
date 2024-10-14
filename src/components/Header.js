import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/SisterFloraLogo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="container-fluid m-0 p-0">
      <div className="row align-items-center">
        <div className="col-md-2">
          <img src={logo} alt="SisterFlora Logo" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <h1>Welcome to SisterFlora</h1>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a href="/FlowerStore/" className="navbar-brand">SisterFlora</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link" activeClassName="active">
                About Us
              </NavLink>
              <NavLink to="/shop" className="nav-item nav-link" activeClassName="active">
                Shop
              </NavLink>
              <NavLink to="/blog" className="nav-item nav-link" activeClassName="active">
                Blog
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;