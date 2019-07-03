import React, { useCallback, useMemo } from 'react';

import { AccordionButtonInterface } from './accordion.types';

import { Button } from '../Button/Button';
import { ChevronRight } from '../MaterialIcons/ChevronRight';

import { useAccordion } from './AccordionContext';
import { useAccordionItem } from './AccordionItem';
import { accordionButtonTheme, accordionIconTheme } from './accordion.theme';

export const AccordionButton = function AccordionButton({
  children,
  className,
  onFocus,
  handleOnClick,
  themed,
  ...propsRest
}: AccordionButtonInterface) {
  const classNames = `AccordionButton ${className}`;
  const { active, setActiveItem } = useAccordion();
  const { uid } = useAccordionItem();

  const handleClick = useCallback(
    function handleClick(e) {
      e.preventDefault();
      handleOnClick ? handleOnClick(e) : setActiveItem(e.target.dataset.uid);
    },
    [handleOnClick, setActiveItem]
  );

  const handleFocus = useCallback(
    function handleFocus(e) {
      e.preventDefault();
      onFocus ? onFocus(e) : setActiveItem(e.target.dataset.uid);
    },
    [onFocus, setActiveItem]
  );

  const _themed = useMemo(() => [accordionButtonTheme, ...themed], [
    accordionButtonTheme,
    ...themed,
  ]);

  const iconThemed = useMemo(() => [accordionIconTheme, ...themed], [
    accordionIconTheme,
    ...themed,
  ]);

  return (
    <Button
      className={classNames}
      onClick={handleClick}
      data-uid={uid}
      onFocus={handleFocus}
      stretch
      themed={_themed}
      {...propsRest}
    >
      {children}
      <ChevronRight
        data-uid={uid}
        className="AccordionIcon"
        active={active === uid}
        css="padding: 0;"
        themed={iconThemed}
        alt={active === uid ? 'Expand' : 'Collapse'}
      />
    </Button>
  );
};

AccordionButton.defaultProps = {
  className: '',
  themed: [],
};

export default AccordionButton;
