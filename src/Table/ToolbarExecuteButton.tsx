import React, { useMemo } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { TableToolbarButtonInterface } from './table.types';
import { PlayCircle } from '../MaterialIcons/PlayCircle';

export const ToolbarExecuteButton = function ToolbarExecuteButton({
  onClick,
  ...propsRest
}: TableToolbarButtonInterface) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const icon = useMemo(() => PlayCircle, [PlayCircle]);

  return (
    <ButtonIcon
      alt="execute"
      appearance="active"
      uid="execute"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Run
    </ButtonIcon>
  );
};

export default ToolbarExecuteButton;
