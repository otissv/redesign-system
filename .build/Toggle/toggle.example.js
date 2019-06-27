import { useMemo, useState } from 'react';
export var ToggleContainer = function ToggleContainer(_a) {
    var children = _a.children;
    var toggle = useState(false);
    var context = useMemo(function () { return toggle; }, [toggle]);
    return children(context);
};
//# sourceMappingURL=toggle.example.js.map