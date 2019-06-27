import React, { useMemo } from 'react';

import { AccordionIconInterface } from './accordion.types';

import { Icon } from '../Icon';
import { accordionIconTheme } from './accordion.theme';
import { ChevronRight } from '../MaterialIcons/ChevronRight';

export function AccordionIcon({
  children,
  className,
  themed,
  ...propsRest
}: AccordionIconInterface) {
  const classNames = `AccordionIcon ${className}`;
  const _themed = useMemo(() => [accordionIconTheme, ...themed], [
    accordionIconTheme,
    ...themed,
  ]);

  return (
    <Icon
      className={classNames}
      themed={_themed}
      {...propsRest}
      icon={ChevronRight}
    >
      {children}
    </Icon>
  );
}

AccordionIcon.defaultProps = {
  className: '',
  themed: [],
};

export default AccordionIcon;
