import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Brush } from '../MaterialIcons/Brush';
import { parse, print } from 'graphql';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarPrettifyButton(_a) {
    var onClick = _a.onClick, value = _a.value, propsRest = tslib_1.__rest(_a, ["onClick", "value"]);
    function handleClick(e) {
        e.preventDefault();
        var ast = parse(value);
        var printValue = print(ast);
        onClick && onClick(printValue);
    }
    var icon = useMemo(function () { return Brush; }, [Brush]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ appearance: "active", alt: "prettify", uid: "prettify", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Prettify"));
}
export default ToolbarPrettifyButton;
//# sourceMappingURL=ToolbarPrettifyButton.js.map