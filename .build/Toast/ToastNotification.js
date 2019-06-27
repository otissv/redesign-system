import * as tslib_1 from "tslib";
import React, { useMemo, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { Close } from '../MaterialIcons/Close';
import Base from '../Base/Base';
import { ButtonIcon } from '../ButtonIcon';
import { Portal } from '../Portal';
import { toastTheme, toastPositionTheme, toastNotificationTheme, toastNotificationCloseButtonTheme, toastNotificationAppearanceTheme, } from './toast.theme';
function ToastNotificationCloseButton(_a) {
    var onClose = _a.onClose, uid = _a.uid, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["onClose", "uid", "themed"]);
    var _themed = useMemo(function () { return [toastNotificationCloseButtonTheme].concat(themed); }, [toastNotificationCloseButtonTheme, themed]);
    return (React.createElement(ButtonIcon, tslib_1.__assign({ className: "ToastNotificationCloseButton", onClick: onClose, icon: Close, title: "Close" }, propsRest, { uid: uid, themed: _themed })));
}
ToastNotificationCloseButton.defaultProps = {
    themed: [],
};
export function ToastNotification(_a) {
    var animate = _a.animate, children = _a.children, className = _a.className, notifications = _a.notifications, onClose = _a.onClose, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["animate", "children", "className", "notifications", "onClose", "themed"]);
    var classNames = "ToastNotification " + className;
    var _themed = useMemo(function () { return [toastTheme, toastPositionTheme].concat(themed); }, [
        toastTheme,
        toastPositionTheme,
        themed,
    ]);
    var themedNotification = useMemo(function () { return [toastNotificationTheme, toastNotificationAppearanceTheme]; }, [toastNotificationTheme, toastNotificationAppearanceTheme]);
    var rootRef = useRef(document.getElementsByTagName('body')[0]);
    var _animate = useMemo(function () {
        return (animate || {
            enter: {
                y: 0,
                transition: {
                    y: { type: 'spring', stiffness: 1000, damping: 100 },
                    default: { duration: 300 },
                },
            },
            exit: {
                y: -500,
                transition: { duration: 300 },
            },
        });
    }, [animate]);
    var items = notifications
        .map(function (_a) {
        var id = _a.id, component = _a.component;
        var notification = React.createElement(component.type, tslib_1.__assign({}, component.props, { appearance: null }), component.props.children);
        return (React.createElement(Base, { className: "Notification", animate: _animate, appearance: component.props.appearance, key: id, themed: themedNotification },
            notification,
            React.createElement(ToastNotificationCloseButton, { onClose: onClose, uid: id, alt: "close" })));
    })
        .reverse();
    return (React.createElement(Portal, { rootRef: rootRef },
        React.createElement(Base, tslib_1.__assign({ className: classNames, element: "ul", themed: _themed }, propsRest),
            React.createElement(PoseGroup, null, items))));
}
ToastNotification.defaultProps = {
    className: '',
    themed: [],
};
export default ToastNotification;
//# sourceMappingURL=ToastNotification.js.map