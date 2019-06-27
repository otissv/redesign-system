import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { videoTheme } from './video.theme';
export function Video(_a) {
    var allowFullScreen = _a.allowFullScreen, autoPlay = _a.autoPlay, children = _a.children, className = _a.className, embeded = _a.embeded, height = _a.height, inview = _a.inview, muted = _a.muted, src = _a.src, width = _a.width, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["allowFullScreen", "autoPlay", "children", "className", "embeded", "height", "inview", "muted", "src", "width", "themed"]);
    var classNames = "Video " + className;
    var _themed = useMemo(function () { return [videoTheme].concat(themed); }, [videoTheme, themed]);
    var properties = tslib_1.__assign({}, propsRest, { allowFullScreen: allowFullScreen ? true : null, autoPlay: autoPlay ? true : null, height: height, inview: inview ? true : null, muted: muted || null, src: src,
        width: width });
    return (React.createElement(Base, tslib_1.__assign({ as: embeded ? null : 'video', className: classNames, themed: _themed }, (embeded ? null : properties)), embeded ? React.createElement("iframe", tslib_1.__assign({}, properties, { frameBorder: "0" })) : children));
}
Video.defaultProps = {
    className: '',
    embeded: false,
    height: 'auto',
    inview: false,
    loop: false,
    muted: false,
    playsInline: false,
    preload: 'auto',
    themed: [],
    width: '100%',
};
export default Video;
//# sourceMappingURL=Video.js.map