import React, { useMemo } from 'react';

import { Search } from '../MaterialIcons/Search';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { TableToolbarButtonInterface } from './table.types';

export const ToolbarVariablesButton = function ToolbarVariablesButton({
  onClick,
  ...propsRest
}: TableToolbarButtonInterface) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const icon = useMemo(() => Search, [Search]);

  return (
    <ButtonIcon
      alt="variables"
      appearance="active"
      uid="variables"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Variables
    </ButtonIcon>
  );
};

export default ToolbarVariablesButton;
