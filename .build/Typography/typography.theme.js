export function typographyTheme(_a) {
    var animation = _a.theme.animation;
    return {
        transition: animation.easeMedium(),
    };
}
export function typographyAppearanceTheme(_a) {
    var appearance = _a.appearance, color = _a.theme.color;
    switch (appearance) {
        case 'accent':
            return {
                color: color.accent,
            };
        case 'action':
            return {
                color: color.action,
            };
        case 'danger':
            return {
                color: color.danger,
            };
        case 'disabled':
            return {
                color: color.disabled,
            };
        case 'success':
            return {
                color: color.success,
            };
        case 'warning':
            return {
                color: color.warning,
            };
        default:
            return {};
    }
}
export function typographyModifyTheme(_a) {
    var modify = _a.modify, _b = _a.theme, color = _b.color, font = _b.font;
    switch (modify) {
        case 'lead':
            return {
                fontSize: font.size[8],
                fontWeight: 300,
            };
        case 'meta':
            return {
                fontSize: font.size[2],
                color: color['grey-500'],
            };
        default:
            return {};
    }
}
export function typographyWrapTheme(_a) {
    var wrap = _a.wrap;
    switch (wrap) {
        case 'truncate':
            return {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            };
        case 'break':
            return {
                wordWrap: 'break-word',
                hyphens: 'auto',
            };
        case 'nowrap':
            return {
                whiteSpace: 'nowrap',
            };
        default:
            return {};
    }
}
export function typographyTransformTheme(_a) {
    var textTransform = _a.textTransform;
    switch (textTransform) {
        case 'capitalize':
            return {
                textTransform: 'capitalize',
            };
        case 'lowercase':
            return {
                textTransform: 'lowercase',
            };
        case 'uppercase':
            return {
                textTransform: 'uppercase',
            };
        default:
            return {};
    }
}
export function typographyTextAlignTheme(_a) {
    var textAlign = _a.textAlign;
    switch (textAlign) {
        case 'left':
            return {
                textAlign: 'left',
            };
        case 'leftSmall':
            return {
                textAlign: 'left',
            };
        case 'leftMedium':
            return {
                textAlign: 'left',
            };
        case 'leftLarge':
            return {
                textAlign: 'left',
            };
        case 'right':
            return {
                textAlign: 'right',
            };
            rightSmall: return {
                textAlign: 'right',
            };
        case 'rightMedium':
            return {
                textAlign: 'right',
            };
        case 'center':
            return {
                textAlign: 'center',
            };
        case 'centerSmall':
            return {
                textAlign: 'center',
            };
        case 'centerMedium':
            return {
                textAlign: 'center',
            };
        case 'centerLarge':
            return {
                textAlign: 'center',
            };
        case 'justify':
            return {
                textAlign: 'justify',
            };
        default:
            return {};
    }
}
//# sourceMappingURL=typography.theme.js.map