import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { TimeRestore } from '../MaterialIcons/TimeRestore';
export function ToolbarHistoryButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return TimeRestore; }, [TimeRestore]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "History", appearance: "active", uid: "history", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "History"));
}
export default ToolbarHistoryButton;
//# sourceMappingURL=ToolbarHistoryButton.js.map