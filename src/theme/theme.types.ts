export interface ThemeInterface {
  border?: BorderInterface;
  colors?: ColorsInterface;
  elevate?: ElevateInterface;
  font?: FontsInterface;
  radius?: RadiusInterface;
  scrollbar?: { [key: string]: any };
  shared?: { [key: string]: any };
  swatches?: { [key: string]: string };
  units?: UnitsInterface;
  [key: string]: any;
}

export type AppearanceDefaultType = 'primary' | 'secondary' | 'tertiary';

export type AppearanceAccentType =
  | 'accent'
  | 'primary-accent'
  | 'secondary-accent'
  | 'tertiary-accent';

export type AppearanceActiveType =
  | 'active'
  | 'primary-active'
  | 'secondary-active'
  | 'tertiary-active';

export type AppearanceActionType =
  | 'action'
  | 'primary-action'
  | 'secondary-action'
  | 'tertiary-action';

export type AppearanceDangerType =
  | 'danger'
  | 'primary-danger'
  | 'secondary-danger'
  | 'tertiary-danger';

export type AppearanceErrorType =
  | 'error'
  | 'primary-error'
  | 'secondary-error'
  | 'tertiary-error';

export type AppearanceSuccessType =
  | 'success'
  | 'primary-success'
  | 'secondary-success'
  | 'tertiary-success';

export type AppearanceWarningType =
  | 'warning'
  | 'primary-warning'
  | 'secondary-warning'
  | 'tertiary-warning';

export type AppearanceDisabledType =
  | 'disabled'
  | 'primary-disabled'
  | 'secondary-disabled'
  | 'tertiary-disabled';

export type AppearanceType =
  | AppearanceDefaultType
  | AppearanceAccentType
  | AppearanceActiveType
  | AppearanceActionType
  | AppearanceDangerType
  | AppearanceSuccessType
  | AppearanceWarningType
  | AppearanceDisabledType;

export type AppearanceExtendedType = AppearanceType | AppearanceErrorType;

export type AppearanceLimitedType =
  | AppearanceDefaultType
  | AppearanceAccentType
  | AppearanceActionType
  | AppearanceDangerType
  | AppearanceSuccessType
  | AppearanceWarningType
  | AppearanceDisabledType;

export type AppearanceMinType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'action'
  | 'active'
  | 'danger'
  | 'error'
  | 'success'
  | 'warning'
  | 'disabled';

export interface AnimationInterface {
  xslow: string;
  slow: string;
  medium: string;
  fast: string;

  easeFast: (property?: string, delay?: string) => string;
  easeMedium: (property?: string, delay?: string) => string;
  easeSlow: (property?: string, delay?: string) => string;
  easeXslow: (property?: string, delay?: string) => string;

  easeInFast: (property?: string, delay?: string) => string;
  easeInMedium: (property?: string, delay?: string) => string;
  easeInSlow: (property?: string, delay?: string) => string;
  easeInXslow: (property?: string, delay?: string) => string;

  easeInOutFast: (property?: string, delay?: string) => string;
  easeInOutMedium: (property?: string, delay?: string) => string;
  easeInOutSlow: (property?: string, delay?: string) => string;
  easeInOutXslow: (property?: string, delay?: string) => string;
  [key: string]: any;
}

export interface BorderInterface {
  none: string;
  style: string;
  dash: string;
  thickWidth: string;
  thickColor: string;
  thinWidth: string;
  thinColor: string;

  thick: string;
  thickInvert: string;
  thickDashed: string;
  thickDashedInvert: string;
  thickTransparent: string;

  thin: string;
  thinDashed: string;
  thinDashedInvert: string;
  thinInvert: string;
  thinTransparent: string;
  [key: string]: string;
}

export interface ColorsInterface {
  foreground: string;
  background: string;
  foregroundInvert: string;
  backgroundInvert: string;
  transparent: string;
  outline: string;
  white: string;
  black: string;
  ['active']: string;
  ['active2']: string;
  ['active-050']: string;
  ['active-100']: string;
  ['active-200']: string;
  ['active-300']: string;
  ['active-400']: string;
  ['active-500']: string;
  ['active-600']: string;
  ['active-700']: string;
  ['active-800']: string;
  ['active-900']: string;

  ['accent']: string;
  ['accent2']: string;
  ['accent-050']: string;
  ['accent-100']: string;
  ['accent-200']: string;
  ['accent-300']: string;
  ['accent-400']: string;
  ['accent-500']: string;
  ['accent-600']: string;
  ['accent-700']: string;
  ['accent-800']: string;
  ['accent-900']: string;

  ['action']: string;
  ['action2']: string;
  ['action-050']: string;
  ['action-100']: string;
  ['action-200']: string;
  ['action-300']: string;
  ['action-400']: string;
  ['action-500']: string;
  ['action-600']: string;
  ['action-700']: string;
  ['action-800']: string;
  ['action-900']: string;

  ['danger']: string;
  ['danger2']: string;
  ['danger-050']: string;
  ['danger-100']: string;
  ['danger-200']: string;
  ['danger-300']: string;
  ['danger-400']: string;
  ['danger-500']: string;
  ['danger-600']: string;
  ['danger-700']: string;
  ['danger-800']: string;
  ['danger-900']: string;

  ['warning']: string;
  ['warning2']: string;
  ['warning-050']: string;
  ['warning-100']: string;
  ['warning-200']: string;
  ['warning-300']: string;
  ['warning-400']: string;
  ['warning-500']: string;
  ['warning-600']: string;
  ['warning-700']: string;
  ['warning-800']: string;
  ['warning-900']: string;

  ['success']: string;
  ['success2']: string;
  ['success-050']: string;
  ['success-100']: string;
  ['success-200']: string;
  ['success-300']: string;
  ['success-400']: string;
  ['success-500']: string;
  ['success-600']: string;
  ['success-700']: string;
  ['success-800']: string;
  ['success-900']: string;

  ['disabled']: string;
  ['disabled2']: string;
  ['disabled-050']: string;
  ['disabled-100']: string;
  ['disabled-200']: string;
  ['disabled-300']: string;
  ['disabled-400']: string;
  ['disabled-500']: string;
  ['disabled-600']: string;
  ['disabled-700']: string;
  ['disabled-800']: string;
  ['disabled-900']: string;
  [key: string]: string;
}

export interface ElevateInterface {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  [key: string]: string;
}

export interface FontsInterface {
  code: string;
  color: string;
  colorInvert: string;
  lineHeight: {
    1: number;
    2: number;
    3: number;
    4: number;
    default: number;
    [key: string]: number;
  };
  sans: string;
  serif: string;
  size: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    default: string;
    [key: string]: string;
  };
  smooth: string;
  weight: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    default: number;
    [key: string]: number;
  };
}

export interface RadiusInterface {
  circle: string;
  none: string;
  round: string;
  rounded: string;
  [key: string]: string;
}

export interface scrollbarInterface {
  width: string;
  height: string;
  backgroundColor: string;

  corner: {
    backgroundColor: string;
  };

  thumb: {
    backgroundColor: string;
    outline: string;
    transition: string;
    hover: {
      backgroundColor: string;
    };
  };
  [key: string]: any;
}

export interface SharedInterface {
  margin?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  margin0?: string;
  margin1?: string;
  margin2?: string;
  margin3?: string;
  margin4?: string;
  margin5?: string;
  margin6?: string;
  margin7?: string;
  margin8?: string;
  margin9?: string;
  margin10?: string;
  padding?: string;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  padding0?: string;
  padding1?: string;
  padding2?: string;
  padding3?: string;
  padding4?: string;
  padding5?: string;
  padding6?: string;
  padding7?: string;
  padding8?: string;
  padding9?: string;
  padding10?: string;
  border?: (value: string) => { [key: string]: string };
  borderBottom?: (value: string) => { [key: string]: string };
  borderLeft?: (value: string) => { [key: string]: string };
  borderRight?: (value: string) => { [key: string]: string };
  borderTop?: (value: string) => { [key: string]: string };
  radius?: (value: string) => { [key: string]: string };
  elevate?: (value: string) => { [key: string]: string };
  centered?: () => { [key: string]: string };
  widthSize?: (value: string) => { [key: string]: string };
  [key: string]: any;
}

export interface UnitsInterface {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  default: string;
  [key: string]: string;
}

export interface ThemeDefaultsInterface {
  animation: AnimationInterface;
  border: BorderInterface;
  color: ColorsInterface;
  elevate: ElevateInterface;
  font: FontsInterface;
  radius: RadiusInterface;
  shared: SharedInterface;
  scrollbar: scrollbarInterface;
  swatches: {
    [key: string]: string;
  };
  [key: string]: any;
}
