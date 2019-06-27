import { BaseInterface } from '../Base';

export interface GoogleMapsInterface extends BaseInterface {
  children?: (n: any) => React.ReactNode;
  location?: string;
  height?: string;
  width?: string;
}

export type GoogleMapsContextInterface = [
  string,
  React.Dispatch<React.SetStateAction<string>>?
];
