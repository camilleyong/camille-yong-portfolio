import React from 'react';
import './portfolio.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Portfolio() {
  return (
    <Carousel variant="dark">

      <Carousel.Item>
        <img
          className="d-flex justify-content-center"
          src="/assets/catered-gamer-png.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-flex justify-content-center"
          src="/assets/Screen Shot 2022-09-28 at 11.26.30 AM.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-flex justify-content-center"
          src="/assets/Screen Shot 2022-09-18 at 2.05.08 AM.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-flex justify-content-center"
          src="/assets/Screen Shot 2022-10-28 at 3.59.11 AM.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}