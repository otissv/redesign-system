import { AppearanceType } from '../theme';
import { BaseInterface } from '../Base';
export interface ButtonInterface extends BaseInterface {
    appearance?: AppearanceType;
    stretch?: boolean;
    size?: number;
}
