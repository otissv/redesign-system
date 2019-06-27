/// <reference types="react" />
import { BaseInterface } from '../Base';
export interface GoogleMapsInterface extends BaseInterface {
    children?: (n: any) => React.ReactNode;
    location?: string;
    height?: string;
    width?: string;
}
export declare type GoogleMapsContextInterface = [string, React.Dispatch<React.SetStateAction<string>>?];
