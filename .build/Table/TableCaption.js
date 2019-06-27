import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { tableCaptionTheme } from './table.theme';
export function TableCaption(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "TableCaption " + className;
    var _themed = useMemo(function () { return [tableCaptionTheme].concat(themed); }, [
        tableCaptionTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ as: "caption", className: classNames, themed: _themed }, propsRest), children));
}
TableCaption.defaultProps = {
    className: '',
    themed: [],
};
export default TableCaption;
//# sourceMappingURL=TableCaption.js.map