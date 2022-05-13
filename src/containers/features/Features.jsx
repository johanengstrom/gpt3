import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! Atque doloremque magni rem fugiat ducimus modi maxime repellat ullam asperiores fugit corrupti, hic soluta.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! Atque doloremque magni rem fugiat ducimus modi maxime repellat ullam asperiores fugit corrupti, hic soluta.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! Atque doloremque magni rem fugiat ducimus modi maxime repellat ullam asperiores fugit corrupti, hic soluta.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! Atque doloremque magni rem fugiat ducimus modi maxime repellat ullam asperiores fugit corrupti, hic soluta.'
  },
]

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Future is Now and You Just Need To Realize It. Step into Future Today &#38; Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features