import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import fileDownload from 'js-file-download';
import { Download } from '../MaterialIcons/Download';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
export function ToolbarDownloadButton(_a) {
    var onClick = _a.onClick, data = _a.data, fileName = _a.fileName, propsRest = tslib_1.__rest(_a, ["onClick", "data", "fileName"]);
    var text = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    function handleClick(e) {
        e.preventDefault();
        text && fileDownload(text, fileName);
        onClick && onClick(e);
    }
    var icon = useMemo(function () { return Download; }, [Download]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ alt: "download", appearance: "active", uid: "delete", onClick: handleClick, icon: icon, css: "\n        svg.Icon {\n          padding-right: 5px;\n        }\n      " }, propsRest), "Download"));
}
export default ToolbarDownloadButton;
//# sourceMappingURL=ToolbarDownloadButton.js.map