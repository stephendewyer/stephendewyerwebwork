import React, { useCallback, useRef } from 'react';
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

  const autoplay = useRef(
    Autoplay(
        {stopOnInteraction: false},
        (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  
  const onNavButtonClick = useCallback(() => {

    if (!autoplay.current) {
        return
    };

    const reset = autoplay.current.reset;

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
            <div className={styles.embla__dots_container} >
                <div className={styles.embla__dots}>
                    <div className={styles.embla__dots_inner} >
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={classNames(styles.embla__dot, 
                                    {[styles.embla__dot_selected]: (index === selectedIndex)}
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