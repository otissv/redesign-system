import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Plus } from '../MaterialIcons/Plus';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarAddButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return Plus; }, [Plus]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "add", appearance: "active", uid: "add", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Add"));
}
export default ToolbarAddButton;
//# sourceMappingURL=ToolbarAddButton.js.map