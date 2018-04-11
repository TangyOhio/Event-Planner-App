import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './styles.css'

class CarouselContainer extends Component {
  render() {
    return (
      <Carousel showArrows={true}>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/4.jpeg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/5.jpeg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="http://react-responsive-carousel.js.org/assets/6.jpeg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    );
  }
}
  
export default CarouselContainer;
