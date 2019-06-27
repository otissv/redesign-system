import { useMemo, useState } from 'react';

export const ToggleContainer = function ToggleContainer({
  children,
}: {
  children: any;
}) {
  const toggle = useState(false);

  const context = useMemo(() => toggle, [toggle]);

  return children(context);
};
