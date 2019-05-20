import kebabCase from 'lodash/kebabCase'

export function flexTheme({
  alignItems,
  basis,
  display,
  grow,
  justifyContent,
  shrink,
  wrap,
  theme,
}) {
  console.log(theme)
  return {
    display: display || 'flex',
    basis: basis ? `${basis}` : '',
    grow: grow ? `${grow}` : '',
    shrink: shrink ? `${shrink}` : '',
    justifyContent: (justifyContent && [kebabCase(justifyContent)]) || '',
    alignItems: (alignItems && [kebabCase(alignItems)]) || '',
    flexWrap: (wrap && [kebabCase(wrap)]) || '',
  }
}

export function flexDirectionTheme({ direction }) {
  return (
    {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      rowReverse: { flexDirection: 'rowReverse' },
      columnReverse: { flexDirection: 'columnReverse' },
    }[direction] || ''
  )
}
