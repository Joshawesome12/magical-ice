import React, { Component } from 'react';
import Slider from './Slider'
import '../styles/app.sass'

class App extends Component {
  render() {

    return (
      <div>
        <div className='title'>
          <h1>Magical Ice</h1>
        </div>


        <Slider/>
      </div>
    )
  }
}

export default App
