import React, { useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'

import { Close } from '../MaterialIcons/Close'
import Base from '../Base/Base'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { Portal } from '../Portal'

import {
  notifyTheme,
  notifyPositionTheme,
  notifyNotificationTheme,
  notifyNotificationCloseButtonTheme,
  notifyNotificationAppearanceTheme,
} from './notify.theme'

function NotificationCloseButton({ onClose, uid, ...propsRest }) {
  const themedNotification = useMemo(
    () => [notifyNotificationCloseButtonTheme],
    [notifyNotificationCloseButtonTheme]
  )

  return (
    <ButtonIcon
      className="NotificationCloseButton"
      onClick={onClose}
      icon={Close}
      title="Close"
      {...propsRest}
      data-uid={uid}
      themed={themedNotification}
    />
  )
}

export const Notifications = React.memo(function Notifications({
  animate,
  children,
  className,
  notification,
  onClose,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Notifications ${className || ''}`

  const themed = useMemo(
    () => [notifyTheme, notifyPositionTheme, ...propsThemed],
    [notifyTheme, notifyPositionTheme, propsThemed]
  )

  const themedNotification = useMemo(
    () => [notifyNotificationTheme, notifyNotificationAppearanceTheme],
    [notifyNotificationTheme, notifyNotificationAppearanceTheme]
  )

  const rootRef = useRef(document.getElementsByTagName('body')[0])

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
    )
  }, [animate])

  const items = notification
    .map(({ id, component }) => {
      return (
        <Base
          className="Notification"
          animate={_animate}
          appearance={component.props.appearance}
          key={id}
          themed={themedNotification}>
          {component}
          <NotificationCloseButton onClose={onClose} uid={id} />
        </Base>
      )
    })
    .reverse()

  return (
    <Portal rootRef={rootRef}>
      <Base className={classNames} element="ul" themed={themed} {...propsRest}>
        <PoseGroup>{items}</PoseGroup>
      </Base>
    </Portal>
  )
})

Notifications.defaultProps = {
  themed: [],
}

Notifications.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.array,
  className: PropTypes.string,
  items: PropTypes.object,
  uid: PropTypes.string,
  position: PropTypes.oneOf([
    'bottom-center',
    'bottom-left',
    'bottom-right',
    'top-center',
    'top-left',
    'top-right',
  ]),
  messages: PropTypes.array,
  themed: PropTypes.array,
}

export default Notifications
