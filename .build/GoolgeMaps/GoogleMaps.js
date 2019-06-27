import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { googleMapsTheme } from './googleMaps.theme';
export var GoogleMaps = function GoogleMaps(_a) {
    var children = _a.children, className = _a.className, location = _a.location, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "location", "themed"]);
    var classNames = "GoogleMaps " + className + "}";
    var _themed = useMemo(function () { return [googleMapsTheme].concat(themed); }, [
        googleMapsTheme,
        themed,
    ]);
    var query = encodeURIComponent(location);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement("div", { className: "gmap_canvas" },
            React.createElement("iframe", { width: propsRest.width, height: propsRest.height, id: "gmap_canvas", src: "https://maps.google.com/maps?q=" + query + "&t=&z=13&ie=UTF8&iwloc=&output=embed", frameBorder: "0", scrolling: "no", marginHeight: 0, marginWidth: 0 }))));
};
GoogleMaps.defaultProps = {
    className: '',
    height: '300',
    width: '100%',
    themed: [],
};
export default GoogleMaps;
//# sourceMappingURL=GoogleMaps.js.map