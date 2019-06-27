import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { coverImgTheme } from './coverImg.theme';
import { Container } from '../Container';
export function Overlay(_a) {
    var background = _a.background;
    var bgColor = typeof background === 'string' ? background : '#00000080';
    return background ? (React.createElement(Container, { css: "\n        position: absolute;\n        background: " + bgColor + ";\n        width: inherit;\n        height: inherit;\n      " })) : null;
}
export var CoverImg = function CoverImg(_a) {
    // componentDidMount() {
    //   // this.element = helpers.getElement(this.props.kitid);
    //   // this.updateImg(this.element);
    //   // window.addEventListener('resize', this.updateImg);
    // }
    var children = _a.children, className = _a.className, themed = _a.themed, overlay = _a.overlay, propsRest = tslib_1.__rest(_a, ["children", "className", "themed", "overlay"]);
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
    var classNames = "CoverImg " + className;
    var _themed = useMemo(function () { return [coverImgTheme].concat(themed); }, [
        coverImgTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(Overlay, { background: overlay }),
        children));
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
//# sourceMappingURL=CoverImg.js.map