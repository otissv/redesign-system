import { BaseInterface } from '../Base';

export interface ImgResponsiveInterface {
  alt: string;
  height?: string;
  width?: string;
  size?: number;
  src: string;
}

export interface ImgInterface extends BaseInterface {
  alt: string;
  height?: string;
  width?: string;
  widths?: number;
  src: string;
}
