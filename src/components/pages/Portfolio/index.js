import React from 'react';
import './portfolio.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Portfolio() {
  return (
    <Carousel variant="dark">

      <Carousel.Item>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
          <img
          className="d-block w-100"
          src="/assets/orbital-odyssey.png"
          alt="screenshot of orbital odyssey app"
        /> 

        </a>
        <Carousel.Caption>
          <h5 className='portfolio-title'>Orbital Odyssey Project</h5>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders">GitHub Link</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://fathomless-chamber-93211.herokuapp.com/notes"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src="/assets/Screen Shot 2022-09-28 at 11.26.30 AM.png"
          alt="screenshot of note taker app"
        />
        </a>
        <Carousel.Caption>
          <h5 className='portfolio-title'>Note Taker</h5>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/note-taker">
          GitHub Link</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://camilleyong.github.io/weather-dashboard/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src="/assets/Screen Shot 2022-09-18 at 2.05.08 AM.png"
          alt="screenshot of weather api"
        />
        </a>

        <Carousel.Caption>
          <h5 className='portfolio-title'>Weather API</h5>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/weather-dashboard">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://fierce-ravine-29010.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src="/assets/Screen Shot 2022-10-28 at 3.59.11 AM.png"
          alt="screenshot of resume creator"
        />
        </a>

        <Carousel.Caption>
          <h5  className='portfolio-title'>Resume Creator</h5>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cindyung56/resume-creator">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}