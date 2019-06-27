export function toastTheme(_a) {
    var _b = _a.theme, animation = _b.animation, border = _b.border, font = _b.font, unit = _b.unit;
    return {
        position: 'fixed',
        top: unit[3],
        left: unit[3],
        lineHeight: font.lineHeight.default,
        cursor: 'pointer',
        borderRadius: border.radius,
        zIndex: 1040,
        width: '350px',
        transition: animation.easeMedium(),
    };
}
export function toastPositionTheme(_a) {
    var position = _a.position, unit = _a.theme.unit;
    switch (position) {
        case 'top-center':
            return {
                left: '50%',
                right: 'auto',
            };
        case 'top-left':
            return {
                left: unit[3],
                right: 'auto',
            };
        case 'top-right':
            return {
                right: unit[3],
                left: 'auto',
            };
        case 'bottom-center':
            return {
                left: '50%',
                right: 'auto',
            };
        case 'bottom-left':
            return {
                top: unit[3],
                left: unit[3],
                right: 'auto',
            };
        case 'bottom-right':
            return {
                top: 0,
                right: unit[3],
                left: 'auto',
            };
        default:
            return {};
    }
}
// element.style {
//   display: block;
//   opacity: 1;
//   transform: translateY(0px);
// }
// .uk-toast-message {
//   position: relative;
//   margin-bottom: 10px;
//   padding: 15px;
//   background: #444;
//   color: #fff;
//   font-size: 16px;
//   line-height: 22px;
//   cursor: pointer;
//   border: 1px solid #444;
//   border-radius: 4px;
// }
export function toastNotificationTheme(_a) {
    var _b = _a.theme, color = _b.color, elevate = _b.elevate, unit = _b.unit;
    return {
        position: 'relative',
        background: color.background,
        width: '300px',
        minHeight: '50px',
        marginTop: '5px',
        zIndex: '100',
        boxShadow: elevate[5],
        padding: unit[5],
    };
}
export function toastNotificationCloseButtonTheme(_a) {
    var color = _a.theme.color;
    return {
        position: 'absolute',
        top: 0,
        right: 0,
        background: 'none',
        borderColor: '#0000',
        color: color['grey-300'],
        padding: 0,
        margin: '5px 5px 0 0',
        '&:hover': {
            background: 'inherit',
            borderColor: '#0000',
            color: color.foreground,
        },
        '&:active': {
            background: 'inherit',
            borderColor: '#0000',
            color: color['grey-500'],
        },
    };
}
export function toastNotificationAppearanceTheme(_a) {
    var appearance = _a.appearance, _b = _a.theme, color = _b.color, border = _b.border;
    switch (appearance) {
        case 'secondary':
            return {
                border: border.thinWidth + " solid " + color.foreground,
                color: color.foreground,
            };
        case 'tertiary':
            return {
                borderLeft: border.thickWidth + " solid " + color.foreground,
                color: color.foreground,
            };
        case 'accent':
            return {
                background: color.accent,
                border: border.thinAccent,
            };
        case 'primary-accent':
            return {
                background: color.accent,
                border: border.thinAccent,
            };
        case 'secondary-accent':
            return {
                border: border.thinAccent,
            };
        case 'tertiary-accent':
            return {
                borderLeft: border.thickAccent,
            };
        case 'action':
            return {
                background: color.action,
                border: border.thinAction,
            };
        case 'primary-action':
            return {
                background: color.action,
                border: border.thinAction,
            };
        case 'secondary-action':
            return {
                border: border.thinAction,
            };
        case 'tertiary-action':
            return {
                borderLeft: border.thickAction,
            };
        case 'danger':
            return {
                background: color.danger,
                border: border.thinDanger,
            };
        case 'primary-danger':
            return {
                background: color.danger,
                border: border.thinDanger,
            };
        case 'secondary-danger':
            return {
                border: border.thinDanger,
            };
        case 'tertiary-danger':
            return {
                borderLeft: border.thickDanger,
            };
        case 'success':
            return {
                background: color.success,
                border: border.thinSuccess,
            };
        case 'primary-success':
            return {
                background: color.success,
                border: border.thinSuccess,
            };
        case 'secondary-success':
            return {
                border: border.thinSuccess,
            };
        case 'tertiary-success':
            return {
                borderLeft: border.thickSuccess,
            };
        case 'warning':
            return {
                background: color.warning,
                border: border.thinWarning,
            };
        case 'primary-warning':
            return {
                background: color.warning,
                border: border.thinWarning,
            };
        case 'secondary-warning':
            return {
                border: border.thinWarning,
            };
        case 'tertiary-warning':
            return {
                borderLeft: border.thickWarning,
            };
        default:
            return {};
    }
}
//# sourceMappingURL=toast.theme.js.map