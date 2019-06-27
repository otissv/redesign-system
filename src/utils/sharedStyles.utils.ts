import { BaseInterface } from '../Base';

export const sharedStyles = () => {
  return (props: BaseInterface) => {
    return props.theme
      ? Object.keys(props.theme.shared).reduce(
          (previous, key) =>
            props[key]
              ? {
                  ...previous,
                  ...props.theme.shared[key](props[key]),
                }
              : previous,
          {}
        )
      : {};
  };
};
