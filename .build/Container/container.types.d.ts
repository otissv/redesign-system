import { AppearanceType } from '../theme';
import { BaseInterface } from '../Base';
export interface ContainerInterface extends BaseInterface {
    appearance?: AppearanceType;
    stretch?: boolean;
}
