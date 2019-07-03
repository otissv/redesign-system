import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import { BaseInterface } from './base.types';
import { setTheme } from '../utils/setTheme.util';
import { sharedStyles } from '../utils/sharedStyles.utils';
import { useTheme } from '../ThemeContext';

export const Base = function Base({
  animate,
  children,
  css,
  as: el,
  state,
  theme: propsTheme,
  themed = [],
  ...propsRest
}: BaseInterface) {
  const { theme } = useTheme();

  const buildStyledThemed = (props: BaseInterface) => {
    return themed.reduce(
      (acc: { [key: string]: string }, themeFn: (a: any) => any) => {
        return { ...acc, ...themeFn(props) };
      },
      {}
    );
  };

  const poseRef = React.useRef(posed[el || 'div'](animate));
  const styledRef = React.useRef(styled(poseRef.current)`
    ${buildStyledThemed}
    ${sharedStyles}
    ${css}
  `);

  const Component = styledRef.current;
  const _theme = setTheme(propsTheme, theme);

  return (
    <Component pose={state} theme={_theme} {...propsRest}>
      {children}
    </Component>
  );
};

export default Base;
