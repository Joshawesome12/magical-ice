import React, { Component } from 'react';

const SlideOne= (props) => {

  let background = {
    background: 'url(../../snow1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '100vw'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
