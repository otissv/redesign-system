import React, { useMemo } from 'react';

import { iconTheme, iconAppearanceTheme } from './icon.theme';

import Base from '../Base/Base';
import { IconInterface } from './icon.types';

export const Icon = function Icon({
  children,
  className,
  themed,
  title,
  ...propsRest
}: IconInterface) {
  const classNames = `Icon ${className}`;
  const _themed = useMemo(() => [iconTheme, iconAppearanceTheme, ...themed], [
    iconTheme,
    iconAppearanceTheme,
    themed,
  ]);

  return (
    <Base
      as="svg"
      className={classNames}
      themed={_themed}
      xmlns="http://www.w3.org/2000/svg"
      {...propsRest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </Base>
  );
};

Icon.defaultProps = {
  className: '',
  height: '24px',
  themed: [],
  viewBox: '0 0 24 24',
  width: '24px',
};

export default Icon;
