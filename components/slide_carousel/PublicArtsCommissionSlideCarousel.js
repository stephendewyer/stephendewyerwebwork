import React, { Component, useState } from 'react';
import classes from './slide_carousel.module.css';
import Image from 'next/image';
import orange_left_arrow from '../../public/images/arrows/arrow_left_01.png';
import green_left_arrow from '../../public/images/arrows/arrow_left_02.png';
import orange_right_arrow from '../../public/images/arrows/arrow_right_01.png';
import green_right_arrow from '../../public/images/arrows/arrow_right_02.png';
import slide_01 from '../../public/images/case_studies/Public_Arts_Commission/mockups/Public_Arts_Commission_case_study_01.jpg';
import slide_02 from '../../public/images/case_studies/Public_Arts_Commission/mockups/Public_Arts_Commission_case_study_02.jpg';
import slide_03 from '../../public/images/case_studies/Public_Arts_Commission/mockups/Public_Arts_Commission_case_study_03.jpg';
import slide_04 from '../../public/images/case_studies/Public_Arts_Commission/mockups/Public_Arts_Commission_case_study_04.jpg';
import slide_05 from '../../public/images/case_studies/Public_Arts_Commission/mockups/Public_Arts_Commission_case_study_05.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          <Image src={green_left_arrow} alt="green left arrow" /> 
          ) : (
          <Image src={orange_left_arrow} alt="orange left arrow" />
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
          <div key={1}>
            <Image src={slide_01} alt="Public Arts Commission slide 1" />
          </div>
          <div key={2}>
            <Image src={slide_02} alt="Public Arts Commission slide 2" />
          </div>
          <div key={3}>
            <Image src={slide_03} alt="Public Arts Commission slide 3" />
          </div>
          <div key={4}>
            <Image src={slide_04} alt="Public Arts Commission slide 4" />
          </div>
          <div key={5}>
            <Image src={slide_05} alt="Public Arts Commission slide 5" />
          </div>
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