import React, { useMemo } from 'react';

import Base from '../Base/Base';
import { coverImgTheme } from './coverImg.theme';
import { CoverImgInterface } from './coverImg.types';

import { Container } from '../Container';

export const Overlay = function Overlay({
  background,
}: {
  background: string;
}) {
  const bgColor = typeof background === 'string' ? background : '#00000080';

  return background ? (
    <Container
      css={`
        position: absolute;
        background: ${bgColor};
        width: inherit;
        height: inherit;
      `}
    />
  ) : null;
};

export const CoverImg = function CoverImg({
  children,
  className,
  themed,
  overlay,
  ...propsRest
}: CoverImgInterface) {
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

  const classNames = `CoverImg ${className}`;
  const _themed = useMemo(() => [coverImgTheme, ...themed], [
    coverImgTheme,
    themed,
  ]);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <Overlay background={overlay} />
      {children}
    </Base>
  );
};

CoverImg.defaultProps = {
  className: '',
  cover: true,
  height: '300px',
  position: '50% 50%',
  repeat: false,
  themed: [],
  width: '100%',
  parallax: false,
};

export default CoverImg;
