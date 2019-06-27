import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Search } from '../MaterialIcons/Search';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarVariablesButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return Search; }, [Search]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "variables", appearance: "active", uid: "variables", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Variables"));
}
export default ToolbarVariablesButton;
//# sourceMappingURL=ToolbarVariablesButton.js.map