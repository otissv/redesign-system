import React from 'react'

export const JsonView = React.memo(function JsonView({ items }: any) {
  return (
    <pre>
      <code className="language-javascript">
        {JSON.stringify(items, null, 2)}
      </code>
    </pre>
  )
})

export default JsonView
