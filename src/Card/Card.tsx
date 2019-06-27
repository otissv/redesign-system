import React, { useMemo } from 'react';

import { Base } from '../Base';
import { CardInterface } from './card.types';

import { cardTheme, cardAppearanceTheme } from './card.theme';
import { CardProvider } from './CardContext';

export const Card = function Card({
  children,
  className,
  context,
  hover,
  size,
  themed,
  ...propsRest
}: CardInterface) {
  const classNames = `Card ${className}`;
  const _themed = useMemo(() => [cardTheme, cardAppearanceTheme, , ...themed], [
    cardTheme,
    cardAppearanceTheme,
    ,
    themed,
  ]);

  const value = useMemo(
    () => ({
      context,
      hover,
      size,
    }),
    [context, hover, size]
  );

  return (
    <CardProvider value={value}>
      <Base
        className={classNames}
        themed={_themed}
        context={context}
        hover={hover}
        size={size}
        {...propsRest}
      >
        {children}
      </Base>
    </CardProvider>
  );
};

Card.defaultProps = {
  className: '',
  hover: false,
  themed: [],
};

export default Card;
