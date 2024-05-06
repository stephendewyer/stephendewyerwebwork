import React, { Component, useState } from 'react';
import classes from './ClientReviewsSlideCarousel.module.css';
import Image from 'next/image';
import orange_left_arrow from '../../public/images/arrows/arrow_left_01.png';
import green_left_arrow from '../../public/images/arrows/arrow_left_02.png';
import orange_right_arrow from '../../public/images/arrows/arrow_right_01.png';
import green_right_arrow from '../../public/images/arrows/arrow_right_02.png';
import SuzanneContiHeadshot from "../../public/images/reviews/reduced/about-Suzanne_Conti_02.png";
import HollieRottmanGreeneHeadshot from "../../public/images/reviews/reduced/Hollie_Greene_Rottman.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReviewsSlides = [
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

export default class ArtinTechServicesSlideCarousel extends Component {
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
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={classes.slide_carousel}>
        <div className={classes.arrows}>
          <div className={classes.prev_arrow} onClick={this.previous}>
            <PrevArrow />
          </div>
          <div className={classes.next_arrow} onClick={this.next}>
            <NextArrow />
          </div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {ClientReviewsSlides.map((slide, index) => {
            return (
              <div key={index} >
                <div className={classes.slide_container}>
                  <div className={classes.client_profile}>
                    <div className={classes.headshot}>
                      <Image 
                        src={slide.image} 
                        alt={slide.alt_text} 
                        priority
                      />
                    </div>
                    <div className={classes.profile_info}>
                      <h3 className={classes.name}>
                        {slide.name}
                      </h3>
                      <h4 className={classes.company}>
                        {slide.company}
                      </h4>
                    </div>
                  </div>
                  <div className={classes.quote_container}>
                    <cite className={classes.quote}>
                      {`"${slide.paragraph}"`}
                    </cite>
                    <p className={classes.date}>
                      {slide.date}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        
      </div>
    );
  }
}