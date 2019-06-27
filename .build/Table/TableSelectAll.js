import React, { useEffect } from 'react';
export function useTableSelectAll(selected) {
    useEffect(function () {
        var newState = selected.length === Object.keys(items).length;
        if (selected.length === 0) {
            setAllSelected(false);
        }
        else if (allSelected !== newState) {
            setAllSelected(newState);
        }
    }, [selected]);
}
export function TableSelectAll() {
    var _a = useState(false), allSelected = _a[0], setAllSelected = _a[1];
    useEffect(function () {
        var newState = selected.length === Object.keys(items).length;
        if (selected.length === 0) {
            setAllSelected(false);
        }
        else if (allSelected !== newState) {
            setAllSelected(newState);
        }
    }, [selected]);
    function handleSelectHeadingChange(e) {
        setAllSelected(e.currentTarget.checked);
        dispatch({
            type: 'SET_SELECTED',
            selected: !allSelected ? Object.keys(items) : [],
        });
    }
    var AllSelectedHeading = function () { return (React.createElement("input", { name: "allSelected", type: "checkbox", checked: allSelected, onChange: handleSelectHeadingChange, style: { cursor: 'pointer' } })); };
    return;
}
export default TableSelectAll;
//# sourceMappingURL=TableSelectAll.js.map