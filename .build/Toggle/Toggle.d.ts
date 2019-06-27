/// <reference types="react" />
import { ToggleInterface, ToggleInputInterface, ToggleLabelInterface, ToggleContentInterface } from './toggle.types';
declare function ToggleInput({ checked, className, themed, ...propsRest }: ToggleInputInterface): JSX.Element;
declare namespace ToggleInput {
    var defaultProps: {
        className: string;
    };
}
export default ToggleInput;
export declare function ToggleLabel({ checked, className, ...propsRest }: ToggleLabelInterface): JSX.Element;
declare function ToggleContent({ checked, className, ...propsRest }: ToggleContentInterface): JSX.Element;
declare namespace ToggleContent {
    var defaultProps: {
        className: string;
        width: string;
        height: string;
        themed: any[];
    };
}
export default ToggleContent;
declare function Toggle({ id, children, className, hideText, height, toggle, width, themed, ...propsRest }: ToggleInterface): JSX.Element;
declare namespace Toggle {
    var defaultProps: {
        className: string;
        width: string;
        height: string;
        themed: any[];
    };
}
export default Toggle;
export default Toggle;
