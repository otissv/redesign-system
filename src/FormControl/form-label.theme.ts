import { FormLabelInterface } from '../Form';

export function formLabelTheme({
  theme: { animation, unit },
}: FormLabelInterface) {
  return {
    display: 'block',
    marginBottom: unit[1],
    transition: animation.easeMedium(),
  };
}
