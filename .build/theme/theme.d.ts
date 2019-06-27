import { ThemeInterface } from './theme.types';
export declare function theme(props?: ThemeInterface): {
    shared: import("./theme.types").SharedInterface;
    animation: any;
    border: import("./theme.types").BorderInterface;
    color: import("./theme.types").ColorsInterface;
    elevate: import("./theme.types").ElevateInterface;
    font: import("./theme.types").FontsInterface;
    radius: import("./theme.types").RadiusInterface;
    scrollbar: {
        [key: string]: any;
    } & import("./theme.types").scrollbarInterface;
    unit: any;
};
declare const _default: {
    shared: import("./theme.types").SharedInterface;
    animation: any;
    border: import("./theme.types").BorderInterface;
    color: import("./theme.types").ColorsInterface;
    elevate: import("./theme.types").ElevateInterface;
    font: import("./theme.types").FontsInterface;
    radius: import("./theme.types").RadiusInterface;
    scrollbar: {
        [key: string]: any;
    } & import("./theme.types").scrollbarInterface;
    unit: any;
};
export default _default;
