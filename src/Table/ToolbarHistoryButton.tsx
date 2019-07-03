import React, { useMemo } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

import { TimeRestore } from '../MaterialIcons/TimeRestore';
import { TableToolbarButtonInterface } from './table.types';

export const ToolbarHistoryButton = function ToolbarHistoryButton({
  onClick,
  ...propsRest
}: TableToolbarButtonInterface) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const icon = useMemo(() => TimeRestore, [TimeRestore]);

  return (
    <ButtonIcon
      alt="History"
      appearance="active"
      uid="history"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      History
    </ButtonIcon>
  );
};

export default ToolbarHistoryButton;
