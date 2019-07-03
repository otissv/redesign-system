import React, { useMemo } from 'react';

import { AccordionInterface } from './accordion.types';
import { AccordionProvider } from './AccordionContext';
import Base from '../Base/Base';
import { accordionTheme } from './accordion.theme';

export const Accordion = function Accordion({
  active,
  children,
  className,
  themed,
  ...propsRest
}: AccordionInterface) {
  const classNames = `Accordion ${className}`;

  const _themed = useMemo(() => [accordionTheme, ...themed], [
    accordionTheme,
    themed,
  ]);

  return (
    <AccordionProvider active={active}>
      <Base className={classNames} themed={_themed} {...propsRest}>
        {children}
      </Base>
    </AccordionProvider>
  );
};

Accordion.defaultProps = {
  themed: [],
};

export default Accordion;
