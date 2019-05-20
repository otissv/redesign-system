import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Notifications } from './Notifications'
import difference from 'lodash/difference'
import cuid from 'cuid'

export const NotifyContext = React.createContext()

export const Notify = function Notify({
  children,
  messages,
  timeout,
  themed,
  ...propsRest
}) {
  const [notifications, setNotifications] = useState([])
  const newNotificationsRef = useRef([])

  useEffect(() => {
    const _notification = children.map(child => {
      return {
        id: child.key,
        component: child,
      }
    })

    newNotificationsRef.current = difference(_notification, notifications)
    setNotifications([...notifications, ...newNotificationsRef.current])
  }, [children])

  useEffect(() => {
    const removeNotificationWithTimeout = () => {
      const notificationsFilter = notification => n => n.id === notification.id

      setNotifications(
        notifications.filter(notification => {
          return (
            notification.component.props.sticky ||
            !newNotificationsRef.current.filter(
              notificationsFilter(notification)
            )
          )
        })
      )
    }

    setTimeout(removeNotificationWithTimeout, timeout)

    return () => {
      clearTimeout(removeNotificationWithTimeout)
    }
  }, [newNotificationsRef.current, timeout])

  function handleOnClose(e) {
    e.preventDefault()

    const notificationsFilter = notification => {
      return notification.id !== e.currentTarget.dataset.uid
    }

    setNotifications(notifications.filter(notificationsFilter))
    newNotificationsRef.current = newNotificationsRef.current.filter(
      notificationsFilter
    )
  }

  const context = useMemo(
    () => ({
      notifications,
      setNotifications,
    }),
    [notifications]
  )

  return (
    <NotifyContext.Provider const value={context}>
      <Notifications
        themed={themed}
        notification={notifications}
        {...propsRest}
        onClose={handleOnClose}
      />
    </NotifyContext.Provider>
  )
}

Notify.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',

    'accent',
    'primary-accent',
    'secondary-accent',
    'tertiary-accent',

    'action',
    'primary-action',
    'secondary-action',
    'tertiary-action',

    'danger',
    'primary-danger',
    'secondary-danger',
    'tertiary-danger',

    'success',
    'primary-success',
    'secondary-success',
    'tertiary-success',

    'warning',
    'primary-warning',
    'secondary-warning',
    'tertiary-warning',
  ]),
  messages: PropTypes.array,
  timeout: PropTypes.number,
}

Notify.defaultProps = {
  messages: [],
  timeout: 10000,
  themed: [],
}

export default Notify
