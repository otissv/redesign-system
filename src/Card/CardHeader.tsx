import React, { useMemo } from 'react';

import Base from '../Base/Base';
import { useCard } from './CardContext';
import { cardHeaderTheme, cardHeaderContextTheme } from './cardHeader.theme';
import { CardHeaderInterface } from './card.types';

export function CardHeader({
  children,
  className,
  themed,
  ...propsRest
}: CardHeaderInterface) {
  const card = useCard();
  const classNames = `CardHeader ${className}`;
  const _themed = useMemo(
    () => [cardHeaderTheme, cardHeaderContextTheme, ...themed],
    [cardHeaderTheme, cardHeaderContextTheme, themed]
  );

  return (
    <Base className={classNames} {...card} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
}

CardHeader.defaultProps = {
  className: '',
  themed: [],
};

export default CardHeader;
