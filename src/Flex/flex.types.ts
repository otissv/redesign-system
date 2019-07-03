import { BaseInterface } from '../Base';

export type AlignItemsType =
  | 'center'
  | 'flexEnd'
  | 'flexStart'
  | 'stretch'
  | 'spaceAround'
  | 'spaceEvenly'
  | 'spaceBetween';

export type AlignContentType =
  | 'center'
  | 'flexEnd'
  | 'flexStart'
  | 'stretch'
  | 'spaceAround'
  | 'spaceEvenly'
  | 'spaceBetween';

export type JustifyContentType =
  | 'center'
  | 'flexEnd'
  | 'flexStart'
  | 'stretch'
  | 'spaceAround'
  | 'spaceEvenly'
  | 'spaceBetween';

export type JustifyItemsType =
  | 'center'
  | 'flexEnd'
  | 'flexStart'
  | 'stretch'
  | 'spaceAround'
  | 'spaceEvenly'
  | 'spaceBetween';

export type DirectionType = 'row' | 'rowReverse' | 'column' | 'columnReverse';

export type WrapType = 'nowrap' | 'wrap' | 'wrapReverse';

export interface FlexInterface extends BaseInterface {
  alignContent?: AlignContentType;
  alignItems?: AlignItemsType;
  direction?: DirectionType;
  flow?: string;
  JustifyContent?: JustifyContentType;
  JustifyItems?: JustifyItemsType;
  stretch?: boolean;
  wrap?: WrapType;
  order?: number;
}
