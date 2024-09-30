import React from 'react';
import './Hero.css';

import huevo from '../assets/mobile/image-transform.jpg';
import vaso from '../assets/mobile/image-stand-out.jpg';
import cerezas from '../assets/desktop/image-graphic-design.jpg';
import naranja from '../assets/desktop/image-photography.jpg';
import fondoBlanco from '../assets/desktop/pared-blanca-fondo-blanco-que-dice-palabra-cita_994023-371201.webp'; 

const Hero = () => {
  return (
    <section className="hero">
    
      
      <div className="hero-item">
        <div className="text-content">
          <h2>Transform your brand</h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast.</p>
          <a href="#">LEARN MORE</a>
        </div>
        <img src={huevo} alt="Transform your brand" />
      </div>

   
      <div className="hero-item">
        <img src={vaso} alt="Stand out to the right audience" />
        <div className="text-content">
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers.</p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>

      
      <div className="hero-item-row">
        <div className="image-text-overlay" style={{ backgroundImage: `url(${cerezas})`, height: '300px' }}>
          <div className="overlay-text">
            <h2>Graphic Design</h2>
            <p>Great design makes you memorable and leaves a lasting impression.</p>
          </div>
        </div>

        
        <div className="image-text-overlay" style={{ backgroundImage: `url(${naranja})`, height: '300px' }}>
          <div className="overlay-text">
            <h2>Photography</h2>
            <p>Capture the moments that matter with high-quality, stunning photography.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
