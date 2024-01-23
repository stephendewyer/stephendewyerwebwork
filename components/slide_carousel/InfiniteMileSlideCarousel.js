import React, { Component, useState } from 'react';
import classes from './slide_carousel.module.css';
import Image from 'next/image';
import orange_left_arrow from '../../public/images/arrows/arrow_left_01.png';
import green_left_arrow from '../../public/images/arrows/arrow_left_02.png';
import orange_right_arrow from '../../public/images/arrows/arrow_right_01.png';
import green_right_arrow from '../../public/images/arrows/arrow_right_02.png';
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfiniteMileSlides = [
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

const NextArrow = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <div 
          
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image src={green_right_arrow} alt="green right arrow" priority /> 
          ) : (
          <Image src={orange_right_arrow} alt="orange right arrow" priority />
        )}    
    </div>
  );
};

const PrevArrow = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <div 
          
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image src={green_left_arrow} alt="green left arrow" priority/> 
          ) : (
          <Image src={orange_left_arrow} alt="orange left arrow" priority/>
        )}    
    </div>
  );
};

export default class InfiniteMileSlideCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={classes.slide_carousel}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {InfiniteMileSlides.map((slide, index) => {
            return (
              <div key={index}>
                <Image src={slide.image} alt={slide.alt_text} priority/>
              </div>
            );
          })}
        </Slider>
        <div className={classes.arrows}>
          <div className={classes.prev_arrow} onClick={this.previous}>
            <PrevArrow />
          </div>
          <div className={classes.next_arrow} onClick={this.next}>
            <NextArrow />
          </div>
        </div>
      </div>
    );
  }
}