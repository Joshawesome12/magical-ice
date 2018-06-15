import React, { Component } from 'react';
import Slider from './Slider'
import '../styles/app.sass'

class App extends Component {
  render() {

    return (
      <div>
        <div className='title'>
          <img className="title-logo" src={require('../Resources/Magical.png')} alt='Magical Ice'/>
        </div>

        <div className='slider'>
          <Slider/>
        </div>
      </div>
    )
  }
}

export default App
