import React from 'react';
import styles from './ClientReviewsSlideCarousel.module.css';
import Image from 'next/image';
import SuzanneContiHeadshot from "../../public/images/reviews/reduced/about-Suzanne_Conti_02.png";
import HollieRottmanGreeneHeadshot from "../../public/images/reviews/reduced/Hollie_Greene_Rottman.png";
import EmblaCarousel from '../emblaCarousel/emblaCarousel';

const ClientReviewsCarousel = () => {

  const clientReviewsData = [
    {
      image: SuzanneContiHeadshot,
      alt_text: "Suzanne Conti headshot",
      name: "Suzanne Conti",
      company: "Suzanne Conti Quilts",
      paragraph: "stephen was extremely professional and generous in his working to create my website to my expectations. He had tremendous ideas and understood what I was trying to achieve with my website. He exceeded my expectations for the functions of the website. I love the art and design. The sorting and filters were exceptional. I also like how he created a special section for ancestral quilts. His leadership is outstanding, customer focused and determined to please. Great value. You cannot go wrong hiring him.",
      date: "6 May 2024"
    },
    {
      image: HollieRottmanGreeneHeadshot,
      alt_text: "Chef Hollie Rottman Greene headshot",
      name: "Chef Hollie Rottman Greene",
      company: "Joyfoodly",
      paragraph: "stephen [made] our daunting project of closing our business and two sites so easy and stress free. The legacy site [he] created was exactly what we wanted. We appreciated [his] proactive way of working with us, never finding a challenge too much to handle. [He is] a joy to work with!",
      date: "12 February 2022"
    }
  ];
  
  const clientReviewsSlides = clientReviewsData.map((slide, index) => {
    return (
      {image: 
        <div key={index} >
          <div className={styles.slide_container}>
            <div className={styles.client_profile}>
              <div className={styles.headshot}>
                <Image 
                  src={slide.image} 
                  alt={slide.alt_text} 
                  priority
                />
              </div>
              <div className={styles.profile_info}>
                <h3 className={styles.name}>
                  {slide.name}
                </h3>
                <h4 className={styles.company}>
                  {slide.company}
                </h4>
              </div>
            </div>
            <div className={styles.quote_container}>
              <cite className={styles.quote}>
                {`"${slide.paragraph}"`}
              </cite>
              <p className={styles.date}>
                {slide.date}
              </p>
            </div>
          </div>
        </div>
    });
  });

  const options = { loop: true };

  return (
    <div className={styles.carousel_container}>
      <EmblaCarousel slides={clientReviewsSlides} options={options} />
    </div>
  );
}

export default ClientReviewsCarousel;
