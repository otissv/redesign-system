import React, { useMemo } from 'react';

import { Edit } from '../MaterialIcons/Edit';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { TableToolbarButtonInterface } from './table.types';

export function ToolbarEditButton({
  onClick,
  ...propsRest
}: TableToolbarButtonInterface) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const icon = useMemo(() => Edit, [Edit]);

  return (
    <ButtonIcon
      alt="edit"
      appearance="active"
      uid="edit"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Edit
    </ButtonIcon>
  );
}

export default ToolbarEditButton;
