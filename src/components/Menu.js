import React, { Component } from 'react';


export default class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

  }

  render() {
    return (<div className='menu'>
      <h1>This is the menu Component</h1>
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
    </div>
  )
  }

}
