import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { imgTheme, imgSizeTheme } from './img.theme';
export function Img(_a) {
    // componentDidMount() {
    //   // this.element = helpers.getElement(this.props.kitid);
    //   // this.updateImg(this.element);
    //   // window.addEventListener('resize', this.updateImg);
    // }
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
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
    var classNames = "Img " + className;
    var _themed = useMemo(function () { return [imgTheme, imgSizeTheme].concat(themed); }, [
        imgTheme,
        imgSizeTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ as: "img", className: classNames, themed: _themed }, propsRest)));
}
Img.defaultProps = {
    className: '',
    themed: [],
};
export default Img;
//# sourceMappingURL=Img.js.map