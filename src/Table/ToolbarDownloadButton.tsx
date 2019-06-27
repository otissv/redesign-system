import React, { useMemo } from 'react';
import fileDownload from 'js-file-download';
import { TableToolbarDownloadButtonInterface } from './table.types';
import { Download } from '../MaterialIcons/Download';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

export function ToolbarDownloadButton({
  onClick,
  data,
  fileName,
  ...propsRest
}: TableToolbarDownloadButtonInterface) {
  const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    text && fileDownload(text, fileName);
    onClick && onClick(e);
  }

  const icon = useMemo(() => Download, [Download]);

  return (
    <ButtonIcon
      alt="download"
      appearance="active"
      uid="delete"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Download
    </ButtonIcon>
  );
}

export default ToolbarDownloadButton;
