import React, { useCallback, useRef, useState } from 'react';
import cuid from 'cuid';
import { Container } from '../Container';
import { Button } from '../Button';
export function ToastExample(_a) {
    var children = _a.children;
    var _b = useState([]), messages = _b[0], addMessage = _b[1];
    var cntRef = useRef(1);
    var handleClick = useCallback(function handleClick(e) {
        e.preventDefault();
        addMessage([
            {
                id: cuid(),
                message: (e.currentTarget.dataset.sticky ? 'Stick ' : '') + " Item " + cntRef.current,
                sticky: e.currentTarget.dataset.sticky,
                appearance: e.currentTarget.dataset.appearance,
            },
        ]);
        cntRef.current = cntRef.current + 1;
    }, [cuid]);
    return (React.createElement("div", null,
        React.createElement(Container, { margin5: "bottom" },
            React.createElement("h3", null, "Default"),
            React.createElement(Button, { margin3: "right bottom", onClick: handleClick }, "Default"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary", "data-appearance": "secondary", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary", "data-appearance": "tertiary", onClick: handleClick }, "Tertiary")),
        React.createElement("h3", null, "Accent"),
        React.createElement(Container, { margin5: "bottom" },
            React.createElement(Button, { margin3: "right bottom", appearance: "primary-accent", "data-appearance": "primary-accent", onClick: handleClick }, "Primary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary-accent", "data-appearance": "secondary-accent", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary-accent", "data-appearance": "tertiary-accent", onClick: handleClick }, "Tertiary")),
        React.createElement("h3", null, "Action"),
        React.createElement(Container, { margin5: "bottom" },
            React.createElement(Button, { margin3: "right bottom", appearance: "action", "data-appearance": "primary-action", onClick: handleClick }, "Primary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary-action", "data-appearance": "secondary-action", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary-action", "data-appearance": "tertiary-action", onClick: handleClick }, "Tertiary")),
        React.createElement("h3", null, "Danger"),
        React.createElement(Container, { margin5: "bottom" },
            React.createElement(Button, { margin3: "right bottom", appearance: "danger", "data-appearance": "primary-danger", onClick: handleClick }, "Primary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary-danger", "data-appearance": "secondary-danger", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary-danger", "data-appearance": "tertiary-danger", onClick: handleClick }, "Tertiary")),
        React.createElement("h3", null, "Success"),
        React.createElement(Container, { margin5: "bottom" },
            React.createElement(Button, { margin3: "right bottom", appearance: "success", "data-appearance": "success", onClick: handleClick }, "Primary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary-success", "data-appearance": "secondary-success", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary-success", "data-appearance": "tertiary-success", onClick: handleClick }, "Tertiary")),
        React.createElement("h3", null, "Warning"),
        React.createElement(Container, { margin5: "bottom" },
            React.createElement(Button, { margin3: "right bottom", appearance: "warning", "data-appearance": "warning", onClick: handleClick }, "Primary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "secondary-warning", "data-appearance": "secondary-warning", onClick: handleClick }, "Secondary"),
            React.createElement(Button, { margin3: "right bottom", appearance: "tertiary-warning", "data-appearance": "tertiary-warning", onClick: handleClick }, "Tertiary")),
        children(messages)));
}
//# sourceMappingURL=toast.example.js.map