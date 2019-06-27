/// <reference types="react" />
import { GoogleMapsInterface } from './googleMaps.types';
export declare const GoogleMaps: {
    ({ children, className, location, themed, ...propsRest }: GoogleMapsInterface): JSX.Element;
    defaultProps: {
        className: string;
        height: string;
        width: string;
        themed: any[];
    };
};
export default GoogleMaps;
