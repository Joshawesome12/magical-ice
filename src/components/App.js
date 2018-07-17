import React, { Component } from 'react';
import Homepage from './Homepage';
import Menu from './Menu';
import About from './About';
import '../styles/app.sass';
import Slider from './Slider'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:'about'
    }

  }

  showHome = () =>{
    this.setState({display:'home'})
  }

  showMenu = () =>{
    this.setState({display:'menu'})
  }

  showAbout = () =>{
    this.setState({display:'about'})
  }

  render() {

    let mainContent;
    if (this.state.display === 'menu'){mainContent = <Menu/>}
     else if (this.state.display ==='about'){mainContent = <About/>}
     else {mainContent = <Homepage/>}

    return (
      <div>
        <div className='title'>
          <img className="title-logo" src={require('../Resources/Magical-Ice.png')} alt='Magical Ice'/>
          <div>
            <Slider/>
          </div>
        </div>
        <div className='navbar'>
          <div className='row1'>
            <a onClick={this.showHome.bind(this)}>Home</a>
          </div>
          <div className='row2'>
            <a onClick={this.showMenu.bind(this)}>Menu</a>
            <a onClick={this.showAbout.bind(this)}>About</a>
          </div>
        </div>
        <div>
          {/* {mainContent} */}
        </div>
        <div className='footer'>
          <div className='icons'>
            <a href="https://www.facebook.com/pages/Magical-Ice/442140369571807">
              <img className="facebook" src={require('../resources/likeus.png')} alt='facebook icon'/>
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
