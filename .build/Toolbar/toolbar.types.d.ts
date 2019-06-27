/// <reference types="react" />
import { BaseInterface } from '../Base';
export interface SelectToolbarInterface {
    selected: number;
    handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface ToolbarInterface extends BaseInterface {
    items?: any[];
    onDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void;
    onSwitchView?: (e: React.MouseEvent<HTMLElement>, { id }: {
        id: string;
    }) => void;
    toolbar?: any[];
    selectToolbar: (props: SelectToolbarInterface) => JSX.Element;
}
