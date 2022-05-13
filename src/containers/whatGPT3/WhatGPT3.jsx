import React from 'react';
import { Feature } from '../../components';

import './whatGPT3.css';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde facilis accusamus tempora error alias vitae, iure at veritatis nesciunt, assumenda doloribus, itaque voluptates! Eligendi odio neque voluptatibus sed saepe atque nihil nesciunt vitae, est quibusdam blanditiis officia illum praesentium corporis error impedit, autem sit minima doloremque quod culpa et." /> 
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, atque? Repellat porro totam cum labore!" />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit est a, impedit totam suscipit saepe?" />
        <Feature title="Education" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magni explicabo temporibus saepe ullam facere." />
      </div>
    </div>
  )
}

export default WhatGPT3