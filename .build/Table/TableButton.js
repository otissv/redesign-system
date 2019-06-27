import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Copy } from '../MaterialIcons/Copy';
import { Delete } from '../MaterialIcons/Delete';
import { Edit } from '../MaterialIcons/Edit';
import { Download } from '../MaterialIcons/Download';
import { ButtonIcon } from '../ButtonIcon';
// const ButtonIcon = styled.a`
//   background: #0000;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   outline: none;
//   padding: 0;
//   transform: translateY(4px);
//   white-space: nowrap;
// `;
export function TableButton(_a) {
    var Component = _a.icon, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["icon", "uid"]);
    var icon = useMemo(function () { return Component; }, [Component]);
    return React.createElement(ButtonIcon, tslib_1.__assign({ "data-uid": uid, icon: icon }, propsRest));
}
export function TableCopyButton(_a) {
    var onClick = _a.onClick, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["onClick", "uid"]);
    var icon = useMemo(function () { return Copy; }, [Copy]);
    return (React.createElement(TableButton, tslib_1.__assign({ name: "copy", onClick: onClick, icon: icon, title: "Copy" }, propsRest)));
}
export function TableDeleteButton(_a) {
    var onClick = _a.onClick, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["onClick", "uid"]);
    var icon = useMemo(function () { return Delete; }, [Delete]);
    return (React.createElement(TableButton, tslib_1.__assign({ name: "delete", onClick: onClick, icon: icon, title: "Delete" }, propsRest)));
}
export function TableDownloadButton(_a) {
    var onClick = _a.onClick, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["onClick", "uid"]);
    var icon = useMemo(function () { return Download; }, [Download]);
    return (React.createElement(TableButton, tslib_1.__assign({ name: "Download", onClick: onClick, icon: icon, title: "Download" }, propsRest)));
}
export function TableEditLink(_a) {
    var children = _a.children, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["children", "uid"]);
    var icon = useMemo(function () { return Edit; }, [Edit]);
    return (React.createElement(TableButton, tslib_1.__assign({ as: "a", name: "Edit", icon: icon, title: "Edit", "data-uid": uid }, propsRest), children));
}
export default TableButton;
//# sourceMappingURL=TableButton.js.map