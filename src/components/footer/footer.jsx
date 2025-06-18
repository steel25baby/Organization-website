import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <section className='Footer'>
      <div className='Contact-icons'>
        <h3>Social Media</h3>
        <div>
        <Link className='footer-icons'><IoLogoInstagram/>Instagram</Link>
        <Link className='footer-icons'><SlSocialFacebook/>Facebook</Link>
        <Link className='footer-icons'><RiTwitterXLine/>Twitter</Link>
        <Link className='footer-icons'><SlSocialLinkedin/>LinkedIn</Link>
        <Link className='footer-icons'><AiOutlineYoutube/>YouTube</Link>
    
        </div>
      </div>
      <div className='Pages-icons'>
        <h3>Pages</h3>
        <div>
        <Link className='footer-icons' to="/"><IoHomeOutline/>Home Page</Link>
      <Link className='footer-icons' to="/events"><MdEventAvailable/>Calendar</Link>
      <Link className='footer-icons'to="/contacts"><MdOutlineContactPhone/>Contacts</Link>
        </div>
      </div>
      <div className='location'>
        <h3>How to find us</h3>
        <h5>Nyandarua county</h5>
        <h5>Ol-Kalau</h5>
      </div>
      <div className='get-in-touch'>
        <h3>Get in Touch</h3>
        <h5>nctsaofficial1@gmail.com</h5>
        <h5>+254 702 381 981</h5>
        <h5>+254 712 681 960</h5>
      </div>
    </section>
    </>
  )
}

export default Footer