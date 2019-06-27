import React, { useMemo } from 'react';

import { AccordionContentInterface } from './accordion.types';

import Base from '../Base/Base';
import { accordionContentTheme } from './accordion.theme';
import { useAccordion } from './AccordionContext';
import { useAccordionItem } from './AccordionItem';

export function AccordionContent({
  children,
  className,
  themed,
  ...propsRest
}: AccordionContentInterface) {
  const classNames = `AccordionContent ${className}`;

  const _themed = useMemo(() => [accordionContentTheme, ...themed], [
    accordionContentTheme,
    themed,
  ]);

  const { active, animate } = useAccordion();
  const { uid } = useAccordionItem();

  const _animate = useMemo(() => {
    return (
      animate || {
        open: { height: 'auto' },
        close: { height: 0 },
      }
    );
  }, [animate]);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <Base animate={_animate} state={active === uid ? 'open' : 'close'}>
        {children}
      </Base>
    </Base>
  );
}

AccordionContent.defaultProps = {
  className: '',
  themed: [],
};

export default AccordionContent;
