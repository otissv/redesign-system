export function tabsTheme({}) {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'stretch',
    alignContent: 'stretch',
  }
}

export function tabsItemTheme({ item }) {
  return (
    {
      width: 'auto',
      flex: 'none',
    }[item] || ''
  )
}

export function tabsListTheme({ list }) {
  return (
    {
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
    }[list] || ''
  )
}

export function tabsPanelTheme({ item }) {
  return (
    {
      display: 'flex',
      flex: 1,
    }[item] || ''
  )
}
