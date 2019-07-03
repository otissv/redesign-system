import { BaseInterface } from '../Base';
import { AppearanceMinType } from '../theme';

export type ModifyType = 'lead' | 'meta';

export type TextAlignType =
  | 'left'
  | 'leftSmall'
  | 'leftMedium'
  | 'leftLarge'
  | 'right'
  | 'rightSmall'
  | 'rightMedium'
  | 'rightLarge'
  | 'center'
  | 'centerSmall'
  | 'centerMedium'
  | 'centerLarge'
  | 'justify';

export type TextTransformType = 'capitalize' | 'lowercase' | 'uppercase';

export type TextVerticalType = 'top' | 'middle' | 'bottom';

export type TextWrapType = 'truncate' | 'break' | 'nowrap';

export interface TypographyInterface extends BaseInterface {
  appearance?: AppearanceMinType;
  href?: string;
  modify?: ModifyType;
  textAlign?: TextAlignType;
  textTransform?: TextTransformType;
  textWrap?: TextWrapType;
  textVertical?: TextVerticalType;
}
