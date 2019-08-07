import React, { useMemo } from 'react'

import Base from '../Base/Base'
import { coverImgTheme } from './coverImg.theme'
import { CoverImgInterface } from './coverImg.types'

import { Container } from '../Container'

export const Overlay = React.memo(function Overlay({
  background,
}: {
  background: string
}) {
  const bgColor = useMemo(
    () => (typeof background === 'string' ? background : '#00000080'),
    [background]
  )
  const render = useMemo(
    () =>
      background ? (
        <Container
          css={`
            position: absolute;
            background: ${bgColor};
            width: inherit;
            height: inherit;
          `}
        />
      ) : null,
    [background, bgColor]
  )

  return render
})

export const CoverImg = React.memo(function CoverImg({
  children,
  className = '',
  themed = [],
  overlay,
  cover = true,
  width = '100%',
  height = '300px',
  position = '50% 50%',
  repeat = false,
  parallax = false,
  ...propsRest
}: CoverImgInterface) {
  const classNames = useMemo(() => `CoverImg ${className}`, [className])
  const _themed = useMemo(() => [coverImgTheme, ...themed], [
    coverImgTheme,
    themed,
  ])

  return (
    <Base
      className={classNames}
      themed={_themed}
      cover={cover}
      width={width}
      height={height}
      position={position}
      repeat={repeat}
      parallax={parallax}
      {...propsRest}
    >
      <Overlay background={overlay} />
      {children}
    </Base>
  )
})

export default CoverImg
