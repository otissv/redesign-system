import React, { useMemo } from 'react';
import { TextAreaInterface } from './textarea.types';

import { Base } from '../Base';

import {
  textareaTheme,
  textareaAppearanceTheme,
  textareaWidthsTheme,
} from './textarea.theme';

export const Textarea = function Textarea({
  children,
  className,
  themed,
  ...propsRest
}: TextAreaInterface) {
  const classNames = `Textarea ${className}`;
  const _themed = useMemo(
    () => [
      textareaTheme,
      textareaAppearanceTheme,
      textareaWidthsTheme,
      ...themed,
    ],
    [textareaTheme, textareaAppearanceTheme, textareaWidthsTheme, themed]
  );

  return (
    <Base
      as="textarea"
      className={classNames}
      themed={_themed}
      disabled={propsRest.appearance === 'disabled'}
      {...propsRest}
    >
      {children}
    </Base>
  );
};

Textarea.defaultProps = {
  className: '',
  themed: [],
};

export default Textarea;
