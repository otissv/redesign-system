import * as tslib_1 from "tslib";
import React, { useContext, useMemo, useState } from 'react';
import Base from '../Base/Base';
import { accordionItemTheme } from './accordion.theme';
export var AccordionItemContext = React.createContext({ uid: '' });
export function useAccordionItem() {
    return useContext(AccordionItemContext);
}
export function AccordionItem(_a) {
    var children = _a.children, className = _a.className, uid = _a.uid, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "uid", "themed"]);
    var classNames = "AccordionItem " + className;
    var _themed = useMemo(function () { return [accordionItemTheme].concat(themed); }, [
        accordionItemTheme,
        themed,
    ]);
    var state = useState(uid);
    var context = useMemo(function () { return ({
        uid: state[0],
    }); }, [uid]);
    return (React.createElement(AccordionItemContext.Provider, { value: context },
        React.createElement(Base, tslib_1.__assign({ className: classNames, _themed: _themed }, propsRest), children)));
}
AccordionItem.defaultProps = {
    className: '',
    themed: [],
};
export default AccordionItem;
//# sourceMappingURL=AccordionItem.js.map