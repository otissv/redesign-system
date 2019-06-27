import React, { Fragment } from 'react';
import { Flex, WrapEnum } from '../../Flex';
import Container from '../../Container/Container';
import { useTheme } from '../../ThemeContext';
import { swatches } from './color.swatches';
export function ColoPalette() {
    var color = useTheme().theme.color;
    return (React.createElement(Fragment, null,
        React.createElement(Flex, { wrap: WrapEnum.wrap, css: "\n          max-width: 768px;\n        " }, Object.keys(swatches).map(function (key) {
            return key == '__filemeta' ? null : (React.createElement(Container, { key: key, css: "\n                text-align: center;\n                margin: 5px;\n              ", marginBottom: 4 },
                React.createElement(Flex, { elevate: 5, css: "\n                  width: 100px;\n                  margin: 24px auto 8px auto;\n                " },
                    React.createElement(Container, { css: "\n                    background: " + color[key] + ";\n                    height: 100px;\n                    width: 100px;\n                  " })),
                color[key],
                React.createElement("br", null),
                key));
        }))));
}
export function ColorSwatch(_a) {
    var label = _a.label, color1 = _a.color1, color2 = _a.color2;
    var color = useTheme().theme.color;
    return (React.createElement(Container, { css: "\n        text-align: center;\n        margin: 5px;\n      ", marginBottom: 4 },
        React.createElement(Flex, { elevate: 5, css: "\n          width: 100px;\n          margin: 24px auto 8px auto;\n        " },
            React.createElement(Container, { css: "\n            background: " + color[color1] + ";\n            height: 100px;\n            width: 50px;\n          " }),
            React.createElement(Container, { css: "\n            background: " + color[color2 || color1] + "\n            height: 100px;\n            width: 50px;\n            display: inline-block\n            " })),
        React.createElement("br", null),
        label));
}
//# sourceMappingURL=color.example.js.map