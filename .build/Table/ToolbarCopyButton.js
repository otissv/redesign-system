import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from '../MaterialIcons/Copy';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarCopyButton(_a) {
    var data = _a.data, onClick = _a.onClick, propsRest = tslib_1.__rest(_a, ["data", "onClick"]);
    var text = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
        //TODO: add copied notification
    }
    var icon = useMemo(function () { return Copy; }, [Copy]);
    return (React.createElement(CopyToClipboard, { text: text, copy: handleClick },
        React.createElement(ButtonIcon, tslib_1.__assign({ alt: "copy", appearance: "active", uid: "copy", icon: icon, css: "\n          svg.Icon {\n            padding-right: 5px;\n          }\n        " }, propsRest), "Copy")));
}
export default ToolbarCopyButton;
//# sourceMappingURL=ToolbarCopyButton.js.map