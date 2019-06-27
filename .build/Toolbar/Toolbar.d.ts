/// <reference types="react" />
import { ToolbarInterface } from './toolbar.types';
declare function Toolbar({ children, className, items, onDeleteSelected, onSwitchView, toolbar, selectToolbar: SelectToolbar, themed, ...propsRest }: ToolbarInterface): JSX.Element;
declare namespace Toolbar {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default Toolbar;
export default Toolbar;
