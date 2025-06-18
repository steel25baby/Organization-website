import { Link } from "react-router-dom";
import Contbanner from "../../assets/Contact 1.jpeg"
import "./contacts.css"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ Name, icon  }) => {
  return (
       
    <div className="Contact">
      <div className="Aboutus-icon-wrapper">{icon}</div>
      <h3>{Name}</h3>
    </div>
  );
};

const Contacts = () => {
  return (
  <>
   <section className="Contacts">
    
  <div className="contact-hero">
  <div className="contacts-banner">
    <div className="Contacts-banner-image">
    <img src={Contbanner} alt="" />
    </div>
    </div>;
    <div
     className='RegisterWrapper'>
          <h1>Contact Us</h1>
          <p>feel free to contact us any time. we will get back to you as soon as we can</p>
          <div className='CustomerDetails'>
          <label htmlFor="fullname">Full name</label>
          <input 
          type="text" 
          id='fullname'
          className='inputDetails'
          placeholder='Full Name'
          />
        </div>
        <div className='CustomerDetails'>
          <label htmlFor="email">Email Address</label>
          <input 
          type="email" 
          id='email'
          className='inputDetails'
          placeholder='Email Address'
          />
        </div>
        <div className="CustomerDetails">
          <label htmlFor="message">Message</label>
          <input
           type="text"
           id="message"
           className="inputDetails"
           placeholder="Message"
            />
        </div>
        <div className="CustomerButton">
          <button className="form-button">send</button>
        </div>
        </div>
        
  </div>

<div className="map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27414.62611159007!2d37.288677170451756!3d-0.1575201927858927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827e264a95116b7%3A0x501b6e20567ff6b8!2sMount%20Kenya!5e0!3m2!1sen!2ske!4v1717928867440!5m2!1sen!2ske" width="600" height="450" style={{border: 0}} loading="lazy" ></iframe>

  <div className="info">
      <div className="info-header">info</div>
      <div className="info-icons">
        <Contact icon={<FaInstagram/>} Name="Instagram"/>
        <Contact icon={<FaFacebook/>} Name="FaceBook"/>
        <Contact icon={<FaXTwitter/>} Name="Twitter"/>
        <Contact icon={<FaPhoneAlt/>} Name="+254702381681"/>
      </div>
  </div>
  <div className="Visiting-hours">
    <h3>opening hours</h3>
    <p>8.00am</p>
    <h3>closing hours</h3>
    <p>4.30pm</p>
    <p>we are open from monday to friday</p>
  </div>
</div>
   </section>
  </>
 )
};

export default Contacts;