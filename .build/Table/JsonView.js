import React from 'react';
export function JsonView(_a) {
    var itemList = _a.itemList;
    var value = itemList.map(function (doc, i) { return "/* " + i + " */\n" + JSON.stringify(doc, null, 2) + "\n"; });
    return (React.createElement("code", null,
        React.createElement("pre", null, value)));
}
export default JsonView;
//# sourceMappingURL=JsonView.js.map