import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { flexTheme, flexDirectionTheme } from './flex.theme';
import { Base } from '../Base';
export var Flex = function Flex(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Flex " + className;
    var _themed = useMemo(function () { return [flexTheme, flexDirectionTheme].concat(themed); }, [
        flexTheme,
        flexDirectionTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), children));
};
Flex.defaultProps = {
    className: '',
    themed: [],
};
export default Flex;
//# sourceMappingURL=Flex.js.map