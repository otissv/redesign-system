import React, { useMemo } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Copy } from '../MaterialIcons/Copy'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarCopyButton = React.memo(function ToolbarCopyButton({
  data,
  hasViews,
  onClick,
  ...propsRest
}) {
  const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2)

  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
    //TODO: add copied notification
  }

  const icon = useMemo(() => Copy, [Copy])

  return (
    <CopyToClipboard text={text} copy={handleClick}>
      <ButtonIcon uid="copy" icon={icon} {...propsRest} />
    </CopyToClipboard>
  )
})

export default ToolbarCopyButton
