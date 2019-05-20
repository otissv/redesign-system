import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'
import cuid from 'cuid'

export function NotifyContainer({ children }) {
  const [messages, addMessage] = useState([])
  const cntRef = useRef(1)

  function handleClick(e) {
    e.preventDefault()

    addMessage([
      {
        id: cuid(),
        message: `${e.target.dataset.sticky ? 'Stick ' : ''} Item ${
          cntRef.current
        }`,
        sticky: e.target.dataset.sticky,
        appearance: e.target.dataset.appearance,
      },
    ])

    cntRef.current = cntRef.current + 1
  }

  return (
    <div>
      <Container margin5="bottom">
        <h3>Default</h3>
        <Button margin3="right bottom" onClick={handleClick}>
          Default
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary"
          data-appearance="secondary"
          onClick={handleClick}>
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary"
          data-appearance="tertiary"
          onClick={handleClick}>
          Tertiary
        </Button>
      </Container>

      <h3>Accent</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="accent"
          data-appearance="primary-accent"
          onClick={handleClick}>
          Primary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-accent"
          data-appearance="secondary-accent"
          onClick={handleClick}>
          Secondary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-accent"
          data-appearance="tertiary-accent"
          onClick={handleClick}>
          Tertiary Accent
        </Button>
      </Container>

      <h3>Action</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="action"
          data-appearance="primary-action"
          onClick={handleClick}>
          Primary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-action"
          data-appearance="secondary-action"
          onClick={handleClick}>
          Secondary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-action"
          data-appearance="tertiary-action"
          onClick={handleClick}>
          Tertiary Accent
        </Button>
      </Container>

      <h3>Danger</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="danger"
          data-appearance="primary-danger"
          onClick={handleClick}>
          Primary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-danger"
          data-appearance="secondary-danger"
          onClick={handleClick}>
          Secondary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-danger"
          data-appearance="tertiary-danger"
          onClick={handleClick}>
          Tertiary Accent
        </Button>
      </Container>

      <h3>Success</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="success"
          data-appearance="success"
          onClick={handleClick}>
          Primary Success
        </Button>

        <Button
          margin3="right bottom"
          appearance="secondary-success"
          data-appearance="secondary-success"
          onClick={handleClick}>
          Secondary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-success"
          data-appearance="tertiary-success"
          onClick={handleClick}>
          Tertiary Accent
        </Button>
      </Container>

      <h3>Warning</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="warning"
          data-appearance="warning"
          onClick={handleClick}>
          Primary Warning
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-warning"
          data-appearance="secondary-warning"
          onClick={handleClick}>
          Secondary Accent
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-warning"
          data-appearance="tertiary-warning"
          onClick={handleClick}>
          Tertiary Accent
        </Button>
      </Container>

      {children(messages)}
    </div>
  )
}
