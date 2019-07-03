import React, { useMemo } from 'react';

import { Brush } from '../MaterialIcons/Brush';
import { parse, print } from 'graphql';
import { TableToolbarButtonInterface } from './table.types';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

export const ToolbarPrettifyButton = function ToolbarPrettifyButton({
  onClick,
  value,
  ...propsRest
}: TableToolbarButtonInterface) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const ast = parse(value);
    const printValue = print(ast);
    onClick && onClick(printValue);
  }

  const icon = useMemo(() => Brush, [Brush]);

  return (
    <ButtonIcon
      appearance="active"
      alt="prettify"
      uid="prettify"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Prettify
    </ButtonIcon>
  );
};

export default ToolbarPrettifyButton;
