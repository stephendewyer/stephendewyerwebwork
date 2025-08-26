'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from "./emblaCarousel.module.css";
import classNames from 'classnames';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  const Arrow = () => {
    return (
      <svg 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 500"
        fill="currentColor"
      >
        <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
      </svg>
    );
  };

  return (
    <button
      className={classNames(styles.arrow_button, styles.arrow_button_prev)}
      type="button"
      {...restProps}
    >
      <Arrow />
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  const Arrow = () => {
    return (
      <svg 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 500"
        fill="currentColor"
      >
        <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
      </svg>
    );
  };

  return (
    <button
    className={classNames(styles.arrow_button, styles.arrow_button_next)}
      type="button"
      {...restProps}
    >
      <Arrow />
      {children}
    </button>
  )
}