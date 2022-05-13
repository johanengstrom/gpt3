import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Possibilities are Beyond Your Imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime nihil id doloribus consequuntur, consectetur exercitationem! Praesentium facere est maxime aspernatur natus. Odit, provident ea.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility