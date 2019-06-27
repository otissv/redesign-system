import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ToastNotification } from './ToastNotification';
import difference from 'lodash/difference';

import {
  ToastInterface,
  ToastMessageInterface,
  ToastContextType,
} from './toast.types';

export const ToastContext = React.createContext<ToastContextType>({});

export const Toast = function Toast({
  children,
  messages,
  timeout,
  themed,
  ...propsRest
}: ToastInterface) {
  const [notifications, setNotification] = useState([]);
  const newNotificationRef = useRef([]);

  useEffect(() => {
    const _notification = children.map(child => {
      return {
        id: child.key,
        component: child,
      };
    });

    newNotificationRef.current = difference(_notification, notifications);
    setNotification([...notifications, ...newNotificationRef.current]);
  }, [children]);

  useEffect(() => {
    const removeNotificationWithTimeout = () => {
      const notificationsFilter = (notification: ToastMessageInterface) => (
        n: ToastMessageInterface
      ) => n.id === notification.id;

      setNotification(
        notifications.filter((notification: ToastMessageInterface) => {
          return (
            notification.component.props.sticky ||
            !newNotificationRef.current.filter(
              notificationsFilter(notification)
            )
          );
        })
      );
    };

    const timeoutFn = setTimeout(removeNotificationWithTimeout, timeout);

    return () => {
      clearTimeout(timeoutFn);
    };
  }, [newNotificationRef.current, timeout]);

  function handleOnClose(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const notificationsFilter = (notification: ToastMessageInterface) => {
      return notification.id !== e.currentTarget.dataset.uid;
    };

    setNotification(notifications.filter(notificationsFilter));
    newNotificationRef.current = newNotificationRef.current.filter(
      notificationsFilter
    );
  }

  const context = useMemo(
    () => ({
      notifications,
      setNotification,
    }),
    [notifications, setNotification]
  );

  return (
    <ToastContext.Provider value={context}>
      <ToastNotification
        themed={themed}
        notifications={notifications}
        {...propsRest}
        onClose={handleOnClose}
      />
    </ToastContext.Provider>
  );
};

Toast.defaultProps = {
  messages: [],
  timeout: 3000,
  themed: [],
};

export default Toast;
