import React, { Component } from 'react';

const SlideOne= (props) => {

  let background = {
    background: 'url(../../snow1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '1000px'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
