import React from 'react';
import { useRouter } from './RouterContext';
import { Base, BaseInterface } from '../../Base';

export const Link = function Link({
  className,
  children,
  onClick,
  onEnter,
  to,
  ...propsRest
}: BaseInterface) {
  const classNames = `Link ${className}`;
  const { route, dispatch } = useRouter();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (to !== route) {
      dispatch({
        type: 'ADD_ROUTE',
        route: to,
      });
    }

    onClick && onClick(e);
  }

  return (
    <Base
      as="a"
      className={classNames}
      href={to}
      onClick={handleClick}
      tabIndex={0}
      {...propsRest}
    >
      {children}
    </Base>
  );
};
