import React, { Component } from 'react';
import Homepage from './Homepage';
import Menu from './Menu';
import About from './About';
import '../styles/app.sass';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showWhat:'home'
    }

  }

  showHome = () =>{
    this.setState({showWhat:'home'})
  }

  showMenu = () =>{
    this.setState({showWhat:'menu'})
  }

  showAbout = () =>{
    this.setState({showWhat:'about'})
  }

  render() {

    let something;
    if (this.state.showWhat === 'menu'){something = <Menu/>}
     else if (this.state.showWhat ==='about'){something = <About/>}
     else {something = <Homepage/>}

    return (
      <div>
        <div className='title'>
          <img className="title-logo" src={require('../Resources/Magical-Ice.png')} alt='Magical Ice'/>
        </div>
        <div className='navbar'>
            <a onClick={this.showHome.bind(this)}>Home</a>
            <a onClick={this.showMenu.bind(this)}>Menu</a>
            <a onClick={this.showAbout.bind(this)}>About</a>
        </div>
        <div>
          {something}
        </div>

        {/* <div className='slider'>
          <Slider/>
        </div> */}
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
