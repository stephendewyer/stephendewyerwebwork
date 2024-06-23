import React, { Component, useState } from 'react';
import styles from './slide_carousel.module.css';
import EmblaCarousel from '../emblaCarousel/emblaCarousel';
import Image from 'next/image';
import slide_01 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_01.jpg';
import slide_02 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_02.jpg';
import slide_03 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_03.jpg';
import slide_04 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_04.jpg';
import slide_05 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_05.jpg';
import slide_06 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_06.jpg';
import slide_07 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_07.jpg';
import slide_08 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_08.jpg';
import slide_09 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_09.jpg';
import slide_10 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_10.jpg';
import slide_11 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_11.jpg';
import slide_12 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_12.jpg';
import slide_13 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_13.jpg';
import slide_15 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_15.jpg';
import slide_21 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_21.jpg';
import slide_22 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_22.jpg';
import slide_23 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_23.jpg';
import slide_24 from '../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_Inc_case_study_24.jpg';

const ArtInTechServicesSlideCarousel = () => {

  const ArtInTechServicesImages = [
    {
      image: slide_01,
      alt_text: "Art in Tech Services Inc slide 1"
    },
    {
      image: slide_02,
      alt_text: "Art in Tech Services Inc slide 2"
    },
    {
      image: slide_03,
      alt_text: "Art in Tech Services Inc slide 3"
    },
    {
      image: slide_04,
      alt_text: "Art in Tech Services Inc slide 4"
    },
    {
      image: slide_05,
      alt_text: "Art in Tech Services Inc slide 5"
    },
    {
      image: slide_06,
      alt_text: "Art in Tech Services Inc slide 6"
    },
    {
      image: slide_07,
      alt_text: "Art in Tech Services Inc slide 7"
    },
    {
      image: slide_08,
      alt_text: "Art in Tech Services Inc slide 8"
    },
    {
      image: slide_09,
      alt_text: "Art in Tech Services Inc slide 9"
    },
    {
      image: slide_10,
      alt_text: "Art in Tech Services Inc slide 10"
    },
    {
      image: slide_11,
      alt_text: "Art in Tech Services Inc slide 11"
    },
    {
      image: slide_12,
      alt_text: "Art in Tech Services Inc slide 12"
    },
    {
      image: slide_13,
      alt_text: "Art in Tech Services Inc slide 13"
    },
    {
      image: slide_15,
      alt_text: "Art in Tech Services Inc slide 15"
    },
    {
      image: slide_21,
      alt_text: "Art in Tech Services Inc slide 21"
    },
    {
      image: slide_22,
      alt_text: "Art in Tech Services Inc slide 22"
    },
    {
      image: slide_23,
      alt_text: "Art in Tech Services Inc slide 23"
    },
    {
      image: slide_24,
      alt_text: "Art in Tech Services Inc slide 24"
    }
  ];
  const ArtInTechServicesSlides = ArtInTechServicesImages.map((image, index) => {
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
      <EmblaCarousel slides={ArtInTechServicesSlides} options={options} />
    </div>
  );
}

export default ArtInTechServicesSlideCarousel;