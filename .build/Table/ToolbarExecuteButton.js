import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { PlayCircle } from '../MaterialIcons/PlayCircle';
export function ToolbarExecuteButton(_a) {
    var onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["onClick"]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return PlayCircle; }, [PlayCircle]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "execute", appearance: "active", uid: "execute", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Run"));
}
export default ToolbarExecuteButton;
//# sourceMappingURL=ToolbarExecuteButton.js.map