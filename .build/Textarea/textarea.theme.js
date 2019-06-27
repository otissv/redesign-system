export function textareaTheme(_a) {
    var _b = _a.theme, animation = _b.animation, border = _b.border, color = _b.color, font = _b.font, unit = _b.unit;
    return {
        border: border.thinSecondary,
        background: color['grey-600'],
        borderRadius: 0,
        color: color.foreground,
        lineHeight: font.lineHeight.default,
        maxWidth: "calc(100% - 6px )",
        minHeight: "calc(" + font.size.default + " * 3.5)",
        outline: 0,
        padding: unit[2],
        verticalAlign: 'top',
        webkitAppearance: 'none',
        width: "calc(100% - 6px )",
        transition: animation.easeMedium(),
        '&::placeholder': {
            color: color['grey-200'],
        },
        '&:hover': {
            background: color['grey-500'],
            border: border.thinSecondary,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinSecondary,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinSecondary,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
}
export function textareaAppearanceTheme(_a) {
    var appearance = _a.appearance, _b = _a.theme, border = _b.border, color = _b.color;
    var secondary = {
        background: 'none',
        border: border.thinSecondary,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinSecondary,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinSecondary,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinSecondary,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var accent = {
        border: border.thinGrey500,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinAccent2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinAccent2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinAccent2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryAccent = {
        background: 'none',
        border: border.thinAccent,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinAccent2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinAccent2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinAccent2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var active = {
        background: color['grey-700'],
        border: border.thinActive2,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinAction2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinActive2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinAction2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryActive = {
        background: color['grey-700'],
        border: border.thinActive2,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinActive2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinActive2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinActive2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var action = {
        border: border.thinGrey500,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinAction2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinAction2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinAction2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryAction = {
        background: 'none',
        border: border.thinAction,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinAction2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinAction2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinAction2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var danger = {
        border: border.thinGrey500,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinDanger2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinDanger2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinDanger2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryDanger = {
        background: 'none',
        border: border.thinDanger,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinDanger2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinDanger2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinDanger2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var success = {
        border: border.thinGrey500,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinSuccess2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinSuccess2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinSuccess2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondarySuccess = {
        background: 'none',
        border: border.thinSuccess,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinSuccess2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinSuccess2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinSuccess2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var warning = {
        border: border.thinGrey500,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinWarning2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinWarning2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinWarning2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryWarning = {
        background: 'none',
        border: border.thinWarning,
        '&:hover': {
            background: color['grey-500'],
            border: border.thinWarning2,
        },
        '&:active': {
            background: color['grey-700'],
            border: border.thinWarning2,
        },
        '&:focus': {
            background: color['grey-700'],
            border: border.thinWarning2,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var disabled = {
        color: color.disabled,
        border: border.thinDisabled,
        backgroundColor: color.disabled,
        '&::placeholder': {
            color: color['grey-900'],
        },
        '&:hover': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
        },
        '&:active': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
        },
        '&:focus': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    var secondaryDisabled = {
        color: color.disabled,
        border: border.thinDisabled,
        backgroundColor: color.disabled,
        '&::placeholder': {
            color: color['grey-900'],
        },
        '&:hover': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
        },
        '&:active': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
        },
        '&:focus': {
            backgroundColor: color.disabled,
            border: border.thinDisabled,
            boxShadow: "0 0 0 0.2em " + color.outline,
            zIndex: 2,
        },
    };
    switch (appearance) {
        case 'secondary':
        case 'tertiary':
            return secondary;
        case 'accent':
        case 'primary-accent':
            return accent;
        case 'secondary-accent':
            return secondaryAccent;
        case 'active':
        case 'primary-active':
            return active;
        case 'secondary-active':
            return secondaryActive;
        case 'action':
        case 'primary-action':
            return action;
        case 'secondary-action':
            return secondaryAction;
        case 'danger':
        case 'primary-danger':
            return danger;
        case 'secondary-danger':
            return secondaryDanger;
        case 'error':
        case 'primary-error':
            return danger;
        case 'secondary-error':
            return secondaryDanger;
        case 'success':
        case 'primary-success':
            return success;
        case 'secondary-success':
            return secondarySuccess;
        case 'warning':
        case 'primary-warning':
            return warning;
        case 'secondary-warning':
            return secondaryWarning;
        case 'disabled':
        case 'primary-disabled':
            return disabled;
        case 'secondary-disabled':
            return secondaryDisabled;
        default:
            return {};
    }
}
export function textareaWidthsTheme(_a) {
    var widths = _a.widths;
    switch (widths) {
        case 1:
            return { width: '100px' };
        case 2:
            return { width: '200px' };
        case 3:
            return { width: '300px' };
        case 4:
            return { width: '400px' };
        case 5:
            return { width: '500px' };
        case 6:
            return { width: '600px' };
        case 7:
            return { width: '700px' };
        case 8:
            return { width: '800px' };
        case 9:
            return { width: '900px' };
        case 10:
            return { width: '1000px' };
        default:
            return {};
    }
}
//# sourceMappingURL=textarea.theme.js.map