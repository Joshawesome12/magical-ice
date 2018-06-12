import React, { Component } from 'react';

const SlideThree= (props) => {

  let background = {
    background: 'url(../../snow3.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '1000px'
  }

  return <div style={background} className="slide"></div>
}

export default SlideThree;
