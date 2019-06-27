import { FormControlInterface } from '../Form';

export function formControlTheme({
  theme: { animation, unit },
}: FormControlInterface) {
  return {
    marginBottom: `${unit.default}`,
    transition: animation.easeMedium(),
  };
}
