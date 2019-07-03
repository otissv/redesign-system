import React, { useMemo } from 'react';

import { Base } from '../Base';
import { TypographyInterface } from './typography.types';

import {
  typographyAppearanceTheme,
  typographyTheme,
  typographyModifyTheme,
  typographyWrapTheme,
  typographyTextAlignTheme,
  typographyTransformTheme,
} from './typography.theme';

export const Typography = function Typography({
  children,
  className,
  themed,
  ...propsRest
}: TypographyInterface) {
  const classNames = `Typography ${className}`;
  const _themed = useMemo(
    () => [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      ...themed,
    ],
    [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      themed,
    ]
  );

  const attributes = {
    ...(propsRest.as === 'hr'
      ? {
          role: 'separator',
          'aria-orientation': 'horizontal',
        }
      : {}),
  };

  return (
    <Base
      className={classNames}
      themed={_themed}
      {...attributes}
      {...propsRest}
    >
      {children}
    </Base>
  );
};

Typography.defaultProps = {
  as: 'p',
  themed: [],
};

export default Typography;
