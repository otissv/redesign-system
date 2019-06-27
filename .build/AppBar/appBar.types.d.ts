import { BaseInterface } from '../Base';
import { AppearanceMinType } from '../theme';
declare enum Position {
    FIXED = "fixed",
    ABSOLUTE = "absolute",
    STICkY = "sticky",
    STATIC = "static",
    RELATIVE = "relative"
}
export interface AppBarInterface extends BaseInterface {
    appearance?: AppearanceMinType;
    position?: Position;
}
export {};
