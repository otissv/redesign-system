import React, { useMemo } from 'react'
import fileDownload from 'js-file-download'

import { Download } from '../MaterialIcons/Download'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarDownloadButton = React.memo(function ToolbarDownloadButton({
  hasViews,
  onClick,
  data,
  fileName,
  ...propsRest
}) {
  const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2)

  function handleClick(e) {
    e.preventDefault()
    text && fileDownload(text, fileName || 'guru.json')
    onClick && onClick(e)
  }

  const icon = useMemo(() => Download, [Download])

  return (
    <ButtonIcon uid="delete" onClick={handleClick} icon={icon} {...propsRest} />
  )
})

export default ToolbarDownloadButton
