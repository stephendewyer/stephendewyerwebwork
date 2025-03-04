import React from 'react';
import Image from 'next/image';
import styles from './slide_carousel.module.css';
import slide_01 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_01.jpg';
import slide_02 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_02.jpg';
import slide_03 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_03.jpg';
import slide_04 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_04.jpg';
import slide_05 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_05.jpg';
import slide_06 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_06.jpg';
import slide_07 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_07.jpg';
import slide_08 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_08.jpg';
import slide_09 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_09.jpg';
import slide_10 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_10.jpg';
import slide_11 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_11.jpg';
import slide_12 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_12.jpg';
import slide_13 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_13.jpg';
import slide_19 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_19.jpg';
import slide_20 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_20.jpg';
import slide_21 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_21.jpg';
import slide_22 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_22.jpg';
import slide_23 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_23.jpg';
import slide_25 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_25.jpg';
import slide_26 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_26.jpg';
import EmblaCarousel from "../emblaCarousel/emblaCarousel";

const PublicArtsCommissionSlideCarousel = () => {

  const publicArtsCommissionImages = [
    {
      image: slide_01,
      alt_text: "Public Arts Commission slide 1"
    },
    {
      image: slide_02,
      alt_text: "Public Arts Commission slide 2"
    },
    {
      image: slide_03,
      alt_text: "Public Arts Commission slide 3"
    },
    {
      image: slide_04,
      alt_text: "Public Arts Commission slide 4"
    },
    {
      image: slide_05,
      alt_text: "Public Arts Commission slide 5"
    },
    {
      image: slide_06,
      alt_text: "Public Arts Commission slide 6"
    },
    {
      image: slide_07,
      alt_text: "Public Arts Commission slide 7"
    },
    {
      image: slide_08,
      alt_text: "Public Arts Commission slide 8"
    },
    {
      image: slide_09,
      alt_text: "Public Arts Commission slide 9"
    },
    {
      image: slide_10,
      alt_text: "Public Arts Commission slide 10"
    },
    {
      image: slide_11,
      alt_text: "Public Arts Commission slide 11"
    },
    {
      image: slide_12,
      alt_text: "Public Arts Commission slide 12"
    },
    {
      image: slide_13,
      alt_text: "Public Arts Commission slide 13"
    },
    {
      image: slide_19,
      alt_text: "Public Arts Commission slide 19"
    },
    {
      image: slide_20,
      alt_text: "Public Arts Commission slide 20"
    },
    {
      image: slide_21,
      alt_text: "Public Arts Commission slide 21"
    },
    {
      image: slide_22,
      alt_text: "Public Arts Commission slide 22"
    },
    {
      image: slide_23,
      alt_text: "Public Arts Commission slide 23"
    },
    {
      image: slide_25,
      alt_text: "Public Arts Commission slide 25"
    },
    {
      image: slide_26,
      alt_text: "Public Arts Commission slide 26"
    }
  ];

  const publicArtsCommissionSlides = publicArtsCommissionImages.map((image, index) => {
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
      <EmblaCarousel slides={publicArtsCommissionSlides} options={options} />
    </div>
    
  );
}

export default PublicArtsCommissionSlideCarousel;