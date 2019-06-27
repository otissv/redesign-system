import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Edit } from '../MaterialIcons/Edit';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarEditButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return Edit; }, [Edit]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "edit", appearance: "active", uid: "edit", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Edit"));
}
export default ToolbarEditButton;
//# sourceMappingURL=ToolbarEditButton.js.map