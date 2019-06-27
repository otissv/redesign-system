import { AppearanceMinType } from '../theme';
import { BaseInterface } from '../Base';
export interface IconInterface extends BaseInterface {
    alt: string;
    appearance?: AppearanceMinType;
    height?: string;
    hoverColor?: string;
    viewBox?: string;
    width?: string;
}
