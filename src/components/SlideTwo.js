import React, { Component } from 'react';

const SlideTwo= (props) => {

  let background = {
    background: 'url(../../snow2.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '1000px'
  }


  return <div style={background} className="slide"></div>
}

export default SlideTwo;
