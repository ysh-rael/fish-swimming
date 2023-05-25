import React from 'react';
import './App.css';
import Background from './components/Background'
import Fish from './components/Fish'

export default () => (
  <div className='containerApp'>
    <div id='conteiner'>
      {<Background/>}
      <Fish id="fish1" classesCSS={['swimTop', 'swimDown', 'swimRigth', 'swimLeft']}/>
    </div>
  </div>
);
