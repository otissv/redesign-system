/// <reference types="react" />
import { TableToolbarViewsButtonInterface } from './table.types';
export declare const ToolbarViewsButton: {
    ({ className, currentView, onClick, themed, ...propsRest }: TableToolbarViewsButtonInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default ToolbarViewsButton;
