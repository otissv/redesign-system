/// <reference types="react" />
import { BaseInterface } from '../Base';
import { AppearanceExtendedType } from '../theme';
export interface InputInterface extends BaseInterface {
    appearance?: AppearanceExtendedType;
    stretch?: boolean;
    onClose?: any;
    onBlur?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void;
    placeholder?: string;
    size?: number;
    styled?: string;
    valid?: boolean;
    value?: string;
    widths?: number;
}
