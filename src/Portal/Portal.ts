import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PortalInterface } from './portal.types';

export const Portal = ({ children, rootRef }: PortalInterface) => {
  const elementRef = useRef(document.createElement('div'));

  useLayoutEffect(() => {
    rootRef.current && rootRef.current.appendChild(elementRef.current);

    return () => {
      rootRef.current && rootRef.current.removeChild(elementRef.current);
    };
  }, [rootRef.current, elementRef.current]);

  return createPortal(children, rootRef.current);
};

export default Portal;
