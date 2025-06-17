import React from 'react'
import './navbar.css'
import navbarLogo from '../../assets/nyandarua_page1.jpg'

const Navbar = () => {
  return (
    <section className='navbar-container'>
      <div className='navbar-logo'>
        <img src={navbarLogo} alt="navbar-logo" />
      </div>
      <div className='navbar-links'>
        <ol className='navbar-links-list'>
          <li className='navbar-links-list-item'>
            <a href="/">Home</a>
          </li>
          <li className='navbar-links-list-item'>
            <a href="/about">About Us</a>
          </li>      
          <li className='navbar-links-list-item'>
            <a href="/events">Events</a>
          </li>
          <li className='navbar-links-list-item'>
            <a href="/contacts">Contacts Us</a>
          </li>
        </ol>
      </div>
      <div className='navbar-ctas'>
        <button className='navbar-ctas-button'>
          <a href="/login">Login</a>
        </button>
        <button className='navbar-ctas-button'>
          <a href="/register">Register</a>
        </button>
      </div>
    </section>
  )
}

export default Navbar