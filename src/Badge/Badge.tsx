import React, { useMemo } from 'react';
import { BadgeInterface } from './badge.types';

import Base from '../Base/Base';
import {
  badgeTheme,
  badgeAppearanceTheme,
  badgePillTheme,
} from './badge.theme';

export function Badge({
  children,
  className,
  themed,
  ...propsRest
}: BadgeInterface) {
  const classNames = `Badge ${className}`;
  const _themed = useMemo(
    () => [badgeTheme, badgeAppearanceTheme, badgePillTheme, ...themed],
    [badgeTheme, badgeAppearanceTheme, badgePillTheme, themed]
  );

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
}

Badge.defaultProps = {
  className: '',
  themed: [],
};

export default Badge;
