import React, { useMemo, useRef } from 'react';
import { PoseGroup } from 'react-pose';

import { Close } from '../MaterialIcons/Close';
import Base from '../Base/Base';
import { ButtonIcon } from '../ButtonIcon';
import { Portal } from '../Portal';
import {
  ToastNotificationInterface,
  ToastNotificationCloseInterface,
  ToastMessageInterface,
} from './toast.types';

import {
  toastTheme,
  toastPositionTheme,
  toastNotificationTheme,
  toastNotificationCloseButtonTheme,
  toastNotificationAppearanceTheme,
} from './toast.theme';

function ToastNotificationCloseButton({
  onClose,
  uid,
  themed,
  ...propsRest
}: ToastNotificationCloseInterface) {
  const _themed = useMemo(
    () => [toastNotificationCloseButtonTheme, ...themed],
    [toastNotificationCloseButtonTheme, themed]
  );

  return (
    <ButtonIcon
      className="ToastNotificationCloseButton"
      onClick={onClose}
      icon={Close}
      title="Close"
      {...propsRest}
      uid={uid}
      themed={_themed}
    />
  );
}

ToastNotificationCloseButton.defaultProps = {
  themed: [],
};

export const ToastNotification = function ToastNotification({
  animate,
  children,
  className,
  notifications,
  onClose,
  themed,
  ...propsRest
}: ToastNotificationInterface) {
  const classNames = `ToastNotification ${className}`;

  const _themed = useMemo(() => [toastTheme, toastPositionTheme, ...themed], [
    toastTheme,
    toastPositionTheme,
    themed,
  ]);

  const themedNotification = useMemo(
    () => [toastNotificationTheme, toastNotificationAppearanceTheme],
    [toastNotificationTheme, toastNotificationAppearanceTheme]
  );

  const rootRef = useRef(document.getElementsByTagName('body')[0]);

  const _animate = useMemo(() => {
    return (
      animate || {
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
      }
    );
  }, [animate]);

  const items = notifications
    .map(({ id, component }: ToastMessageInterface) => {
      const notification = React.createElement(
        component.type,
        {
          ...component.props,
          appearance: null,
        },
        component.props.children
      );

      return (
        <Base
          className="Notification"
          animate={_animate}
          appearance={component.props.appearance}
          key={id}
          themed={themedNotification}
        >
          {notification}
          <ToastNotificationCloseButton
            onClose={onClose}
            uid={id}
            alt="close"
          />
        </Base>
      );
    })
    .reverse();

  return (
    <Portal rootRef={rootRef}>
      <Base className={classNames} element="ul" themed={_themed} {...propsRest}>
        <PoseGroup>{items}</PoseGroup>
      </Base>
    </Portal>
  );
};

ToastNotification.defaultProps = {
  className: '',
  themed: [],
};

export default ToastNotification;
