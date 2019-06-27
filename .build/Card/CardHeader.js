import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { useCard } from './CardContext';
import { cardHeaderTheme, cardHeaderContextTheme } from './cardHeader.theme';
export function CardHeader(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var card = useCard();
    var classNames = "CardHeader " + className;
    var _themed = useMemo(function () { return [cardHeaderTheme, cardHeaderContextTheme].concat(themed); }, [cardHeaderTheme, cardHeaderContextTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames }, card, { themed: _themed }, propsRest), children));
}
CardHeader.defaultProps = {
    className: '',
    themed: [],
};
export default CardHeader;
//# sourceMappingURL=CardHeader.js.map