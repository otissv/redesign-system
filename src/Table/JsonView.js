import React, { useMemo } from 'react'

export function JsonView({ itemList, ...propsRest }) {
  const editorOptions = useMemo(
    () => ({
      contextmenu: false,
      minimap: {
        enabled: false,
      },
      readOnly: true,
      selectOnLineNumbers: true,
    }),
    []
  )

  const value = itemList.map(
    (doc, i) => `/* ${i} */
${JSON.stringify(doc, null, 2)}
`
  )

  return (
    <code>
      <pre>{value}</pre>
    </code>
  )
}
