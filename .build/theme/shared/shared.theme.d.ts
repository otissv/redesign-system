import { ThemeInterface, SharedInterface, UnitsInterface } from '../theme.types';
export declare function sharedTheme({ border, elevate, radius, shared, unit, }?: ThemeInterface): SharedInterface;
interface UnitPositionsInterface {
    unit: UnitsInterface;
    style: string;
}
export declare function unitPositions({ unit, style }: UnitPositionsInterface): {
    [key: string]: any;
};
export {};
