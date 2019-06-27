/// <reference types="react" />
import { IconInterface } from './icon.types';
declare function Icon({ children, className, themed, title, ...propsRest }: IconInterface): JSX.Element;
declare namespace Icon {
    var defaultProps: {
        className: string;
        height: string;
        themed: any[];
        viewBox: string;
        width: string;
    };
}
export default Icon;
export default Icon;
