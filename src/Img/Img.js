import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { imgTheme, imgSizeTheme } from './img.theme'

export const Img = React.memo(function Img({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  // componentDidMount() {
  //   // this.element = helpers.getElement(this.props.kitid);
  //   // this.updateImg(this.element);
  //   // window.addEventListener('resize', this.updateImg);
  // }

  // componentWillUnmount() {
  //   // window.removeEventListener('resize', this.updateImg);
  // }

  // updateImg() {
  //   // const props = this.props;
  //   // const element = this.element;
  //   // let screen = helpers.breakpoints().screen;
  //   // let locked = false;
  //   // if (!locked) {
  //   //   const updateElement = (media) => {
  //   //     if (props.cover) {
  //   //       element.style.backgroundImage = props[media].src  `url(${props[media].src})` : `url(${props.src})`;
  //   //     } else {
  //   //       element.src = props[media].src || props.src;
  //   //       element.alt = props[media].alt || props.alt;
  //   //     }
  //   //     element.style.width = props[media].width || props.width;
  //   //     element.style.height = props[media].height || props.height;
  //   //   };
  //   //   if (props.small || props.medium || props.large || props.xlarge) {
  //   //     if (screen.small) {
  //   //       updateElement('small');
  //   //     } else if (screen.medium) {
  //   //       updateElement('medium');
  //   //     } else if (screen.large) {
  //   //       updateElement('large');
  //   //     } else if (screen.xlarge) {
  //   //       updateElement('xlarge');
  //   //     }
  //   //   }
  //   // }
  // }

  const classNames = `Img ${className || ''}`
  const themed = useMemo(() => [imgTheme, imgSizeTheme, ...propsThemed], [
    imgTheme,
    imgSizeTheme,
    propsThemed,
  ])

  return <Base el="img" className={classNames} themed={themed} {...propsRest} />
})

Img.defaultProps = {
  themed: [],
}

Img.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  large: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  medium: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  size: PropTypes.oneOf([
    'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'stretch',
  ]),
  small: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  xlarge: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
}

export default Img
