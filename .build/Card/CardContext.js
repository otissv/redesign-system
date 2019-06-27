import React, { useContext } from 'react';
export var CardContext = React.createContext({});
export function useCard() {
    return useContext(CardContext);
}
export function CardProvider(_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(CardContext.Provider, { value: value }, children);
}
//# sourceMappingURL=CardContext.js.map