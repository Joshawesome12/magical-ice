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
        <div className='navbar'>
            <a href="#Home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
        </div>

        <div className='slider'>
          <Slider/>
        </div>
        {/* <div className='about'>
          <h1>About</h1>
        </div> */}
        <div className='footer'>
          <div className='icons'>
            <a href="https://www.facebook.com/pages/Magical-Ice/442140369571807">
              <img className="facebook" src={require('../resources/facebook.png')} alt='facebook icon'/>
            </a>
          </div>
          <div className='adress'>
            <h2>Pearsall, Texas 78061</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App
