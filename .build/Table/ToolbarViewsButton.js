import * as tslib_1 from "tslib";
import React, { useCallback, useMemo } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { Base } from '../Base';
import { Code } from '../MaterialIcons/Code';
import { ViewList } from '../MaterialIcons/ViewList';
import { tableViewsButtonTheme } from './table.theme';
export var ToolbarViewsButton = function ToolbarViewsButton(_a) {
    var className = _a.className, currentView = _a.currentView, onClick = _a.onClick, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["className", "currentView", "onClick", "themed"]);
    var classNames = "ToolbarViewsButton " + className;
    var _themed = useMemo(function () { return [tableViewsButtonTheme].concat(themed); }, [
        tableViewsButtonTheme,
        themed,
    ]);
    function handleClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    var selectedStyle = useCallback(function (view) { return (currentView === view ? 'border-bottom: 1px solid #fff;' : ''); }, [currentView]);
    var ComponentListAlt = useMemo(function () { return ViewList; }, [ViewList]);
    var ComponentCode = useMemo(function () { return Code; }, [Code]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(ButtonGroup, null,
            React.createElement(ButtonIcon, { alt: "Tabular", appearance: "active", icon: ComponentListAlt, onClick: handleClick, styled: selectedStyle('table'), title: "Tabular", uid: "table", css: "\n            svg.Icon {\n              padding-right: 5px;\n            }\n          " }, "Tabular"),
            React.createElement(ButtonIcon, { Json: true, alt: "json", appearance: "secondary", icon: ComponentCode, onClick: handleClick, styled: selectedStyle('json'), title: "JSON", uid: "json", css: "\n            svg.Icon {\n              padding-right: 5px;\n            }\n          " }, "JSON"))));
};
ToolbarViewsButton.defaultProps = {
    className: '',
    themed: [],
};
export default ToolbarViewsButton;
//# sourceMappingURL=ToolbarViewsButton.js.map