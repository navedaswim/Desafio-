import React from 'react';
import './services.css';

import juan from '../assets/desktop/image-gallery-milkbottles.jpg'; 
import maria from '../assets/desktop/image-gallery-cone.jpg'; 
import carlos from '../assets/desktop/image-gallery-sugarcubes.jpg'; 

const testimonials = [
  {
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    author: "Emily R.",
    image: juan
  },
  {
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    author: "Thomas S.",
    image: maria
  },
  {
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.",
    author: "Jennie F.",
    image: carlos
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Client Testimonials</h2>
      <div className="testimonials-row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={`Foto de ${testimonial.author}`} className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
