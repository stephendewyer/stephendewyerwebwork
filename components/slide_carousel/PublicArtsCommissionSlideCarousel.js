import React, { Component, useState } from 'react';
import classes from './slide_carousel.module.css';
import Image from 'next/image';
import orange_left_arrow from '../../public/images/arrows/arrow_left_01.png';
import green_left_arrow from '../../public/images/arrows/arrow_left_02.png';
import orange_right_arrow from '../../public/images/arrows/arrow_right_01.png';
import green_right_arrow from '../../public/images/arrows/arrow_right_02.png';
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
import slide_14 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_14.jpg';
import slide_15 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_15.jpg';
import slide_16 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_16.jpg';
import slide_17 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_17.jpg';
import slide_18 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_18.jpg';
import slide_19 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_19.jpg';
import slide_20 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_20.jpg';
import slide_21 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_21.jpg';
import slide_22 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_22.jpg';
import slide_23 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_23.jpg';
import slide_24 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_24.jpg';
import slide_25 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_25.jpg';
import slide_26 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_26.jpg';
import slide_27 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_27.jpg';
import slide_28 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_28.jpg';
import slide_29 from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_redesign_29.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const publicArtsCommissionSlides = [
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
    image: slide_14,
    alt_text: "Public Arts Commission slide 14"
  },
  {
    image: slide_15,
    alt_text: "Public Arts Commission slide 15"
  },
  {
    image: slide_16,
    alt_text: "Public Arts Commission slide 16"
  },
  {
    image: slide_17,
    alt_text: "Public Arts Commission slide 17"
  },
  {
    image: slide_18,
    alt_text: "Public Arts Commission slide 18"
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
    image: slide_24,
    alt_text: "Public Arts Commission slide 24"
  },
  {
    image: slide_25,
    alt_text: "Public Arts Commission slide 25"
  },
  {
    image: slide_26,
    alt_text: "Public Arts Commission slide 26"
  },
  {
    image: slide_27,
    alt_text: "Public Arts Commission slide 27"
  },
  {
    image: slide_28,
    alt_text: "Public Arts Commission slide 28"
  },
  {
    image: slide_29,
    alt_text: "Public Arts Commission slide 29"
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

export default class PublicArtsCommissionSlideCarousel extends Component {
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
          {publicArtsCommissionSlides.map((slide, index) => {
            return (
              <div key={index}>
                <Image src={slide.image} alt={slide.alt_text} priority/>
              </div>
            )
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