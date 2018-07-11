import React, { Component } from 'react';


export default class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

  }

  render() {
    return (
      <div className='menu'>
      <h1 className="menu-title">This is the menu Component</h1>
      <div className='menu-items'>
        <h2>Item</h2>
        <img src='../Resources/sno-cones-background.gif' alt='snow cone'/>
        <h2>Item</h2>
        <img src='' alt=''/>
        <h2>Item</h2>
        <img src='' alt=''/>
        <h2>Item</h2>
        <img src='' alt=''/>
        <h2>Item</h2>
        <img src='' alt=''/>
        <h2>Item</h2>
        <img src='' alt=''/>
        <h2>Item</h2>
        <img src='' alt=''/>
      </div>
    </div>
  )
  }

}
