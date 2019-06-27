import React, { useMemo } from 'react';

import { Base } from '../Base';
import {
  ToggleInterface,
  ToggleInputInterface,
  ToggleLabelInterface,
  ToggleContentInterface,
} from './toggle.types';
import {
  // toggleAppearanceTheme,
  toggleInputTheme,
  toggleLabelTheme,
  toggleTheme,
  toggleContentTheme,
} from './toggle.theme';

export function ToggleInput({
  checked,
  className,
  themed,
  ...propsRest
}: ToggleInputInterface) {
  const classNames = `ToggleInput ${className}`;
  const _themed = useMemo(() => [toggleInputTheme], [toggleInputTheme]);

  return (
    <Base
      as="input"
      type="checkbox"
      className={classNames}
      themed={_themed}
      {...propsRest}
    />
  );
}

ToggleInput.defaultProps = {
  className: '',
};

export function ToggleLabel({
  checked,
  className,
  ...propsRest
}: ToggleLabelInterface) {
  const classNames = `ToggleLabel ${className}`;
  const _themed = useMemo(() => [toggleLabelTheme], [toggleLabelTheme, ,]);

  return (
    <Base as="label" className={classNames} themed={_themed} {...propsRest} />
  );
}

export function ToggleContent({
  checked,
  className,
  ...propsRest
}: ToggleContentInterface) {
  const classNames = `ToggleContent ${className}`;
  const _themed = useMemo(() => [toggleContentTheme], [toggleContentTheme, ,]);

  return (
    <Base as="label" className={classNames} themed={_themed} {...propsRest} />
  );
}

ToggleContent.defaultProps = {
  className: '',
  width: '90px',
  height: '90px',
  themed: [],
};

export function Toggle({
  id,
  children,
  className,
  hideText,
  height,
  toggle,
  width,
  themed,
  ...propsRest
}: ToggleInterface) {
  const classNames = `Toggle ${className}`;
  const _themed = useMemo(() => [toggleTheme, ...themed], [
    toggleTheme,
    themed,
  ]);
  const [state, setState] = toggle;

  function handleClick(e) {
    e.preventDefault();
    setState(!state);
  }

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <ToggleInput
        checked={state}
        height={height}
        id={id}
        type="checkbox"
        width={width}
      />
      <ToggleLabel
        checked={state}
        height={height}
        hideText={hideText}
        htmlFor={id}
        onClick={handleClick}
        width={width}
      >
        {children || (
          <ToggleContent
            elevate={1}
            toggle={state}
            width="20px"
            height="20px"
          />
        )}
      </ToggleLabel>
    </Base>
  );
}

Toggle.defaultProps = {
  className: '',
  width: '40px',
  height: '20px',
  themed: [],
};

export default Toggle;
