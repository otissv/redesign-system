import { BaseInterface } from '../Base';

export enum AlignItemsEnum {
  center = 'center',
  flexEnd = 'flexEnd',
  flexStart = 'flexStart',
  stretch = 'stretch',
  spaceAround = 'spaceAround',
  spaceEvenly = 'spaceEvenly',
  spaceBetween = 'spaceBetween',
}

export enum AlignContentEnum {
  center = 'center',
  flexEnd = 'flexEnd',
  flexStart = 'flexStart',
  stretch = 'stretch',
  spaceAround = 'spaceAround',
  spaceEvenly = 'spaceEvenly',
  spaceBetween = 'spaceBetween',
}

export enum JustifyContentEnum {
  center = 'center',
  flexEnd = 'flexEnd',
  flexStart = 'flexStart',
  stretch = 'stretch',
  spaceAround = 'spaceAround',
  spaceEvenly = 'spaceEvenly',
  spaceBetween = 'spaceBetween',
}

export enum JustifyItemsEnum {
  center = 'center',
  flexEnd = 'flexEnd',
  flexStart = 'flexStart',
  stretch = 'stretch',
  spaceAround = 'spaceAround',
  spaceEvenly = 'spaceEvenly',
  spaceBetween = 'spaceBetween',
}

export enum DirectionEnum {
  row = 'row',
  rowReverse = 'rowReverse',
  columnReverse = 'column',
  COLUMN_REVERSE = 'columnReverse',
}

export enum WrapEnum {
  nowrap = 'nowrap',
  wrap = 'wrap',
  wrapReverse = 'wrapReverse',
}

export interface FlexInterface extends BaseInterface {
  alignContent?: AlignContentEnum;
  alignItems?: AlignItemsEnum;
  direction?: DirectionEnum;
  flow?: string;
  JustifyContent?: JustifyContentEnum;
  JustifyItems?: JustifyItemsEnum;
  stretch?: boolean;
  wrap?: WrapEnum;
  order?: number;
}
