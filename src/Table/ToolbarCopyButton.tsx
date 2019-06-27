import React, { useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TableToolbarCopyButtonInterface } from './table.types';

import { Copy } from '../MaterialIcons/Copy';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

export function ToolbarCopyButton({
  data,
  onClick,
  ...propsRest
}: TableToolbarCopyButtonInterface) {
  const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick && onClick(e);
    //TODO: add copied notification
  }

  const icon = useMemo(() => Copy, [Copy]);

  return (
    <CopyToClipboard text={text} copy={handleClick}>
      <ButtonIcon
        alt="copy"
        appearance="active"
        uid="copy"
        icon={icon}
        css={`
          svg.Icon {
            padding-right: 5px;
          }
        `}
        {...propsRest}
      >
        Copy
      </ButtonIcon>
    </CopyToClipboard>
  );
}

export default ToolbarCopyButton;
