import React, { useCallback, useMemo } from 'react';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { Base } from '../Base';
import { Code } from '../MaterialIcons/Code';
import { TableToolbarViewsButtonInterface } from './table.types';
import { ViewList } from '../MaterialIcons/ViewList';
import { tableViewsButtonTheme } from './table.theme';

export const ToolbarViewsButton = function ToolbarViewsButton({
  className,
  currentView,
  onClick,
  themed,
  ...propsRest
}: TableToolbarViewsButtonInterface) {
  const classNames = `ToolbarViewsButton ${className}`;
  const _themed = useMemo(() => [tableViewsButtonTheme, ...themed], [
    tableViewsButtonTheme,
    themed,
  ]);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const selectedStyle = useCallback(
    view => (currentView === view ? 'border-bottom: 1px solid #fff;' : ''),
    [currentView]
  );

  const ComponentListAlt = useMemo(() => ViewList, [ViewList]);
  const ComponentCode = useMemo(() => Code, [Code]);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <ButtonGroup>
        <ButtonIcon
          alt="Tabular"
          appearance="active"
          icon={ComponentListAlt}
          onClick={handleClick}
          styled={selectedStyle('table')}
          title="Tabular"
          uid="table"
          css={`
            svg.Icon {
              padding-right: 5px;
            }
          `}
        >
          Tabular
        </ButtonIcon>
        <ButtonIcon
          Json
          alt="json"
          appearance="secondary"
          icon={ComponentCode}
          onClick={handleClick}
          styled={selectedStyle('json')}
          title="JSON"
          uid="json"
          css={`
            svg.Icon {
              padding-right: 5px;
            }
          `}
        >
          JSON
        </ButtonIcon>
      </ButtonGroup>
    </Base>
  );
};

ToolbarViewsButton.defaultProps = {
  className: '',
  themed: [],
};

export default ToolbarViewsButton;
