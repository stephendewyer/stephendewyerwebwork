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
          <div key={1}>
            <Image src={slide_01} alt="Public Arts Commission slide 1" priority/>
          </div>
          <div key={2}>
            <Image src={slide_02} alt="Public Arts Commission slide 2" priority/>
          </div>
          <div key={3}>
            <Image src={slide_03} alt="Public Arts Commission slide 3" priority/>
          </div>
          <div key={4}>
            <Image src={slide_04} alt="Public Arts Commission slide 4" priority/>
          </div>
          <div key={5}>
            <Image src={slide_05} alt="Public Arts Commission slide 5" priority/>
          </div>
          <div key={6}>
            <Image src={slide_06} alt="Public Arts Commission slide 6" priority/>
          </div>
          <div key={7}>
            <Image src={slide_07} alt="Public Arts Commission slide 7" priority/>
          </div>
          <div key={8}>
            <Image src={slide_08} alt="Public Arts Commission slide 8" priority/>
          </div>
          <div key={9}>
            <Image src={slide_09} alt="Public Arts Commission slide 9" priority/>
          </div>
          <div key={10}>
            <Image src={slide_10} alt="Public Arts Commission slide 10" priority/>
          </div>
          <div key={11}>
            <Image src={slide_11} alt="Public Arts Commission slide 11" priority/>
          </div>
          <div key={12}>
            <Image src={slide_12} alt="Public Arts Commission slide 12" priority/>
          </div>
          <div key={13}>
            <Image src={slide_13} alt="Public Arts Commission slide 13" priority/>
          </div>
          <div key={14}>
            <Image src={slide_14} alt="Public Arts Commission slide 14" priority/>
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