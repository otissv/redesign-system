import React, { useEffect, useMemo, useState, useRef } from 'react'

import Base from '../Base/Base'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PoseGroup } from 'react-pose'
import cuid from 'cuid'

export const CarouselPreviousStyled = styled.button``
export const CarouselNextStyled = styled.button``

export function CarouselPrevious({ ...propsRest }) {
  return <CarouselPreviousStyled {...propsRest} />
}
export function CarouselNext({ ...propsRest }) {
  return <CarouselNextStyled {...propsRest} />
}

CarouselPrevious.displayName = 'CarouselPrevious'
CarouselNext.displayName = 'CarouselNext'

export function carouselTheme({
  height,
  width,
  theme: { animation, color, font },
}) {
  return {
    position: 'relative',
    height: height,
    width: width,
  }
}

export const Carousel = React.memo(function Carousel({
  children,
  className,
  location,
  animate,
  delay,
  height,
  width,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Carousel ${className || ''}`
  const themed = useMemo(() => [carouselTheme, ...propsThemed], [
    carouselTheme,
    propsThemed,
  ])

  const _animate = useMemo(() => {
    return (
      animate || {
        reset: {
          y: 0,
          x: '-150%',
          opacity: 1,
          rotate: '0deg',
          transition: {
            duration: 3000,
          },
        },
        enter: {
          y: 0,
          x: 0,
          opacity: 1,
          rotate: '0deg',
          transition: {
            duration: 3000,
          },
          zIndex: 1,
        },
        exit: {
          x: '-150%',
          opacity: 0.5,
          transition: {
            duration: 3000,
            delay: 1000,
          },
          zIndex: 0,
        },
      }
    )
  }, [animate])

  const [slides, setSlides] = useState([])
  let [sliderIndex, setSlideIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const next = useRef()
  const previous = useRef()

  useEffect(() => {
    const list = []
    children.forEach(child => {
      const displayName = child.type.type
        ? child.type.type.displayName
        : child.type.displayName

      if (
        displayName !== 'CarouselPrevious' &&
        displayName !== 'CarouselNext' &&
        displayName !== 'CarouselSteps'
      ) {
        list.push(child)
      }
    })

    setSlides(list)
  }, [children, setSlides])

  useEffect(() => {
    let cTimeout = null
    if (playing) {
      cTimeout = setTimeout(function() {
        const newIndex = sliderIndex === slides.length - 1 ? 0 : sliderIndex + 1
        setSlideIndex(newIndex)
      }, delay)
    }
    return () => {
      window.clearTimeout(cTimeout)
    }
  }, [playing, sliderIndex, children])

  const slider = slides.map((slide, index) => {
    return (
      <Base
        css="position: absolute"
        animate={_animate}
        key={index}
        className="CarouselSlide"
        height={height}
        width={width}
        state={index === sliderIndex ? 'enter' : 'exit'}
        themed={themed}>
        {slides[sliderIndex]}
      </Base>
    )
  })

  return (
    <Base
      className={classNames}
      themed={themed}
      style={{ overflow: 'hidden' }}
      height={height}
      width={width}
      {...propsRest}>
      {slider}
    </Base>
  )
})

Carousel.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  themed: PropTypes.array,
  delay: PropTypes.number,
}

Carousel.defaultProps = {
  height: '300px',
  width: '100%',
  themed: [],
  delay: 3000,
}

export default Carousel
