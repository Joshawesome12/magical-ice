import React, { Component } from 'react';


export default class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }

  }

  render() {
    return (
      <div>
        <h1 className="about">About</h1>
        <img className="owner-photo" src={require('../Resources/owner.png')} alt=''/>
        <div className='paragraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus est dicta tenetur, vitae illo excepturi sit aspernatur, doloremque quam nostrum, rerum commodi autem, ex voluptas! Corporis non, vero incidunt voluptate!</p>
        </div>
      </div>
    )
  }
}
