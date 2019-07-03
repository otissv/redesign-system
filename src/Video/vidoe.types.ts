import { BaseInterface } from '../Base';

export type PreloadType = 'none' | 'metadata' | 'auto';

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
  preload?: PreloadType;
  src?: string;
  width?: string;
}
