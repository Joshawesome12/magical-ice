import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount(){
    this.slideTimer()
  }

  render() {
    return (
      <div className="slider" >

        {/* <LeftArrow previousSlide={this.previousSlide} /> */}
        {/* Slides go here */}
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }

        {/* Arrow Functionality */}
        {/* <RightArrow nextSlide={this.nextSlide} /> */}

      </div>
    );
  }

  changeSlide = () => {
    if (this.state.slideCount < 3){
      this.setState({slideCount: this.state.slideCount + 1});
    }
    else {
      this.setState({slideCount: this.state.slideCount = 1});
    }
  }

  slideTimer(){
    setInterval(this.changeSlide,5000)
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 })
    }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 })
    }

}
