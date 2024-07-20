import React, { Component, useState } from 'react';
import styles from './slide_carousel.module.css';
import Image from 'next/image';
import EmblaCarousel from '../emblaCarousel/emblaCarousel';
import slide_01 from '../../public/images/case_studies/Joyfoodly/mockups/Joyfoodly_case_study_01.jpg';
import slide_02 from '../../public/images/case_studies/Joyfoodly/mockups/Joyfoodly_case_study_02.jpg';

const JoyfoodlySlideCarousel = () => {

  const JoyfoodlyImages = [
    {
      image: slide_01,
      alt_text: "Joyfoodly slide 1"
    },
    {
      image: slide_02,
      alt_text: "Joyfoodly slide 2"
    }
  ];
  
  const joyfoodlySlides = JoyfoodlyImages.map((image, index) => {
    return (
      {image: 
        <Image 
          src={image.image}
          layout="responsive"
          key={index}
          alt={image.alt_text}
          priority
        />
      }
    );
  });

  const options = { loop: true };

  return (
    <div className={styles.carousel_container}>
      <EmblaCarousel slides={joyfoodlySlides} options={options} />
    </div>
  );
}

export default JoyfoodlySlideCarousel;