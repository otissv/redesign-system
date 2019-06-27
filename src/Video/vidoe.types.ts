import { BaseInterface } from '../Base';

export enum PreloadEnum {
  none = 'none',
  metadata = 'metadata',
  auto = 'auto',
}

export interface VideoInterface extends BaseInterface {
  allowFullScreen?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  embeded?: boolean;
  height?: string;
  intrinsicsize?: string;
  inview?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  preload?: PreloadEnum;
  src?: string;
  width?: string;
}
