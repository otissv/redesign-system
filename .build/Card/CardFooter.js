import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { useCard } from './CardContext';
import { cardFooterTheme, cardFooterContextTheme } from './cardFooter.theme';
export var CardFooter = function CardFooter(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var card = useCard();
    var classNames = "CardFooter " + className;
    var _themed = useMemo(function () { return [cardFooterTheme, cardFooterContextTheme].concat(themed); }, [cardFooterTheme, cardFooterContextTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames }, card, { themed: _themed }, propsRest), children));
};
CardFooter.defaultProps = {
    className: '',
    themed: [],
};
export default CardFooter;
//# sourceMappingURL=CardFooter.js.map