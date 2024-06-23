import React, { Component, useState } from 'react';
import styles from './slide_carousel.module.css';
import Image from 'next/image';
import slide_01 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_02.jpg';
import slide_02 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_01.jpg';
import slide_03 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_03.jpg';
import slide_04 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_04.jpg';
import slide_05 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_05.jpg';
import slide_06 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_06.jpg';
import slide_07 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_07.jpg';
import slide_08 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_08.jpg';
import slide_09 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_09.jpg';
import slide_10 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_10.jpg';
import slide_11 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_11.jpg';
import slide_12 from '../../public/images/case_studies/Infinite_Mile_LLC/mockups/Infinite_Mile_LLC_case_study_12.jpg';
import EmblaCarousel from '../emblaCarousel/emblaCarousel';

const InfiniteMileSlideCarousel = () => {

  const InfiniteMileImages = [
    {
      image: slide_01,
      alt_text: "Infinite Mile slide 1"
    },
    {
      image: slide_02,
      alt_text: "Infinite Mile slide 2"
    },
    {
      image: slide_03,
      alt_text: "Infinite Mile slide 3"
    },
    {
      image: slide_04,
      alt_text: "Infinite Mile slide 4"
    },
    {
      image: slide_05,
      alt_text: "Infinite Mile slide 5"
    },
    {
      image: slide_06,
      alt_text: "Infinite Mile slide 6"
    },
    {
      image: slide_07,
      alt_text: "Infinite Mile slide 7"
    },
    {
      image: slide_08,
      alt_text: "Infinite Mile slide 8"
    },
    {
      image: slide_09,
      alt_text: "Infinite Mile slide 9"
    },
    {
      image: slide_10,
      alt_text: "Infinite Mile slide 10"
    },
    {
      image: slide_11,
      alt_text: "Infinite Mile slide 11"
    },
    {
      image: slide_12,
      alt_text: "Infinite Mile slide 12"
    }
  ];

  const InfiniteMileSlides = InfiniteMileImages.map((image, index) => {
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
      <EmblaCarousel slides={InfiniteMileSlides} options={options} />
    </div>
  );
}

export default InfiniteMileSlideCarousel;


