import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwood K12 182 DK Alkjhjsdfhj, All rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms &#38; Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwood K12 182 DK Alkjhjsdfhj</p>
          <p>0123456789</p>
          <p>demo@whatever.org</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer