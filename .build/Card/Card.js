import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { cardTheme, cardAppearanceTheme } from './card.theme';
import { CardProvider } from './CardContext';
export var Card = function Card(_a) {
    var children = _a.children, className = _a.className, context = _a.context, hover = _a.hover, size = _a.size, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "context", "hover", "size", "themed"]);
    var classNames = "Card " + className;
    var _themed = useMemo(function () { return [cardTheme, cardAppearanceTheme, ].concat(themed); }, [
        cardTheme,
        cardAppearanceTheme,
        ,
        themed,
    ]);
    var value = useMemo(function () { return ({
        context: context,
        hover: hover,
        size: size,
    }); }, [context, hover, size]);
    return (React.createElement(CardProvider, { value: value },
        React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed, context: context, hover: hover, size: size }, propsRest), children)));
};
Card.defaultProps = {
    className: '',
    hover: false,
    themed: [],
};
export default Card;
//# sourceMappingURL=Card.js.map