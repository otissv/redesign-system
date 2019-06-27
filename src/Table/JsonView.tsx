import React from 'react';
import { JsonViewInterface, JsonViewDocInterface } from './table.types';

export function JsonView({ itemList }: JsonViewInterface) {
  const value = itemList.map(
    (doc: JsonViewDocInterface, i: number) => `/* ${i} */
${JSON.stringify(doc, null, 2)}
`
  );

  return (
    <code>
      <pre>{value}</pre>
    </code>
  );
}

export default JsonView;
