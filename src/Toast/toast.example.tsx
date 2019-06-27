import React, { useCallback, useRef, useState } from 'react';
import cuid from 'cuid';

import { Container } from '../Container';
import { Button } from '../Button';

export function ToastExample({ children }: { children: <T>(n: T) => any }) {
  const [messages, addMessage] = useState([]);
  const cntRef = useRef(1);

  const handleClick = useCallback(
    function handleClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault();

      addMessage([
        {
          id: cuid(),
          message: `${e.currentTarget.dataset.sticky ? 'Stick ' : ''} Item ${
            cntRef.current
          }`,
          sticky: e.currentTarget.dataset.sticky,
          appearance: e.currentTarget.dataset.appearance,
        },
      ]);

      cntRef.current = cntRef.current + 1;
    },
    [cuid]
  );

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
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary"
          data-appearance="tertiary"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      <h3>Accent</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="primary-accent"
          data-appearance="primary-accent"
          onClick={handleClick}
        >
          Primary
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-accent"
          data-appearance="secondary-accent"
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-accent"
          data-appearance="tertiary-accent"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      <h3>Action</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="action"
          data-appearance="primary-action"
          onClick={handleClick}
        >
          Primary
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-action"
          data-appearance="secondary-action"
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-action"
          data-appearance="tertiary-action"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      <h3>Danger</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="danger"
          data-appearance="primary-danger"
          onClick={handleClick}
        >
          Primary
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-danger"
          data-appearance="secondary-danger"
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-danger"
          data-appearance="tertiary-danger"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      <h3>Success</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="success"
          data-appearance="success"
          onClick={handleClick}
        >
          Primary
        </Button>

        <Button
          margin3="right bottom"
          appearance="secondary-success"
          data-appearance="secondary-success"
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-success"
          data-appearance="tertiary-success"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      <h3>Warning</h3>
      <Container margin5="bottom">
        <Button
          margin3="right bottom"
          appearance="warning"
          data-appearance="warning"
          onClick={handleClick}
        >
          Primary
        </Button>
        <Button
          margin3="right bottom"
          appearance="secondary-warning"
          data-appearance="secondary-warning"
          onClick={handleClick}
        >
          Secondary
        </Button>
        <Button
          margin3="right bottom"
          appearance="tertiary-warning"
          data-appearance="tertiary-warning"
          onClick={handleClick}
        >
          Tertiary
        </Button>
      </Container>

      {children(messages)}
    </div>
  );
}
