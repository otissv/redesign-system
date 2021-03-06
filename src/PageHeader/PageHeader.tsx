import React, { useMemo } from 'react'
import { Typography } from '../Typography'
import { Base } from '../Base'
import { pageHeaderTheme } from './pageHeader.theme'
import { PageHeaderInterface } from './pageHeader.types'

export const PageHeader = React.memo(function PageHeader({
  as: el = 'h1',
  className,
  themed = [],
  title,
  ...propsRest
}: PageHeaderInterface) {
  const classNames = useMemo(() => `PageHeader ${className}`, [className])
  const _themed = React.useMemo(() => [pageHeaderTheme, ...themed], [
    pageHeaderTheme,
    themed,
  ])

  return title ? (
    <Base
      className={classNames}
      themed={_themed}
      marginBottom={7}
      marginTop={5}
      {...propsRest}
    >
      <Typography as={el} fontSize={6}>
        {title}
      </Typography>
    </Base>
  ) : null
})

export default PageHeader
