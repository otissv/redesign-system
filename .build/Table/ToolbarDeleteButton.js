import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Delete } from '../MaterialIcons/Delete';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarDeleteButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return Delete; }, [Delete]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "delete", appearance: "active", uid: "delete", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Delete"));
}
export default ToolbarDeleteButton;
//# sourceMappingURL=ToolbarDeleteButton.js.map