import React, { useContext, useMemo, useState } from 'react';
export var AccordionContext = React.createContext({
    active: '',
});
export function useAccordion() {
    return useContext(AccordionContext);
}
export function AccordionProvider(_a) {
    var animate = _a.animate, children = _a.children, active = _a.active;
    var state = useState(active);
    var context = useMemo(function () { return ({
        active: state[0],
        animate: animate,
        setActiveItem: state[1],
    }); }, [state]);
    return (React.createElement(AccordionContext.Provider, { value: context }, children));
}
//# sourceMappingURL=AccordionContext.js.map