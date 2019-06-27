/// <reference types="react" />
export interface PortalInterface {
    children: React.ReactNode;
    rootRef: {
        current: HTMLElement;
    };
}
