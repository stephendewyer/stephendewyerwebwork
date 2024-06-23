import React, { useCallback, useRef, useEffect, useState } from 'react';
import { DotButton, useDotButton } from './emblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './emblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./emblaCarousel.module.css";
import classNames from 'classnames';

const EmblaCarousel = (props) => {

  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  
  const onNavButtonClick = useCallback((emblaApi) => {

    const autoplay = emblaApi?.plugins()?.autoplay;

    if (!autoplay) {
        return
    };

    const reset = autoplay.reset;

    reset();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const dotsContainerRef = useRef();

  const [dotsContainerHeight, setDotsContainerHeight] = useState(0);

  useEffect(() => {
        const handleResize = () => {
            setDotsContainerHeight(dotsContainerRef.current.clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  console.log(dotsContainerHeight)

  return (
    <section className={styles.carousel_container}>
        <div className={styles.arrows}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.embla} >
            <div
                className={styles.embla__viewport} 
                ref={emblaRef}
            >
                <div className={styles.embla__container}>
                    {slides.map((slide, index) => {
                        return  (
                            <div 
                                key={index}
                                className={styles.embla__slide}
                            >
                                {slide.image}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div 
                className={styles.embla__dots_container} 
                style={{height: `${dotsContainerHeight}px`}}
            >
                <div className={styles.embla__dots}>
                    <div 
                        className={styles.embla__dots_inner} 
                        ref={dotsContainerRef}
                    >
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={classNames(styles.embla__dot, 
                                    { [styles.embla__dot_selected]: (index === selectedIndex)}
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default EmblaCarousel;