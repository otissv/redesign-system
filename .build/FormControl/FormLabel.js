import * as tslib_1 from "tslib";
import React from 'react';
import { Base } from '../Base';
import { formLabelTheme } from './form-label.theme';
export function FormLabel(_a) {
    var className = _a.className, children = _a.children, id = _a.id, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["className", "children", "id", "themed"]);
    var classNames = "FormLabel " + className;
    var _themed = React.useMemo(function () { return [formLabelTheme].concat(themed); }, [
        formLabelTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ key: id, htmlFor: id, className: classNames, themed: _themed }, propsRest), children));
}
FormLabel.defaultProps = {
    className: '',
    themed: [],
};
export default FormLabel;
//# sourceMappingURL=FormLabel.js.map