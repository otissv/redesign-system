import * as tslib_1 from "tslib";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ToastNotification } from './ToastNotification';
import difference from 'lodash/difference';
export var ToastContext = React.createContext({});
export var Toast = function Toast(_a) {
    var children = _a.children, messages = _a.messages, timeout = _a.timeout, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "messages", "timeout", "themed"]);
    var _b = useState([]), notifications = _b[0], setNotification = _b[1];
    var newNotificationRef = useRef([]);
    useEffect(function () {
        var _notification = children.map(function (child) {
            return {
                id: child.key,
                component: child,
            };
        });
        newNotificationRef.current = difference(_notification, notifications);
        setNotification(notifications.concat(newNotificationRef.current));
    }, [children]);
    useEffect(function () {
        var removeNotificationWithTimeout = function () {
            var notificationsFilter = function (notification) { return function (n) { return n.id === notification.id; }; };
            setNotification(notifications.filter(function (notification) {
                return (notification.component.props.sticky ||
                    !newNotificationRef.current.filter(notificationsFilter(notification)));
            }));
        };
        var timeoutFn = setTimeout(removeNotificationWithTimeout, timeout);
        return function () {
            clearTimeout(timeoutFn);
        };
    }, [newNotificationRef.current, timeout]);
    function handleOnClose(e) {
        e.preventDefault();
        var notificationsFilter = function (notification) {
            return notification.id !== e.currentTarget.dataset.uid;
        };
        setNotification(notifications.filter(notificationsFilter));
        newNotificationRef.current = newNotificationRef.current.filter(notificationsFilter);
    }
    var context = useMemo(function () { return ({
        notifications: notifications,
        setNotification: setNotification,
    }); }, [notifications, setNotification]);
    return (React.createElement(ToastContext.Provider, { value: context },
        React.createElement(ToastNotification, tslib_1.__assign({ themed: themed, notifications: notifications }, propsRest, { onClose: handleOnClose }))));
};
Toast.defaultProps = {
    messages: [],
    timeout: 3000,
    themed: [],
};
export default Toast;
//# sourceMappingURL=Toast.js.map