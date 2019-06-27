import { AppearanceType } from '../theme';
import { BaseInterface } from '../Base';
export interface ToggleInterface extends BaseInterface {
    appearance?: AppearanceType;
    width: string;
    height: string;
    checked?: boolean;
    id: string;
    hideText: string;
}
export interface ToggleInputInterface extends BaseInterface {
    checked: boolean;
    height: string;
    id: string;
    width: string;
    type: string;
}
export interface ToggleLabelInterface extends BaseInterface {
    checked: boolean;
    height: string;
    width: string;
    htmlFor: string;
}
export interface ToggleContentInterface extends BaseInterface {
    toggle: boolean;
    height: string;
    width: string;
}
