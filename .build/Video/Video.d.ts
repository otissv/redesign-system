/// <reference types="react" />
import { VideoInterface } from './vidoe.types';
declare function Video({ allowFullScreen, autoPlay, children, className, embeded, height, inview, muted, src, width, themed, ...propsRest }: VideoInterface): JSX.Element;
declare namespace Video {
    var defaultProps: {
        className: string;
        embeded: boolean;
        height: string;
        inview: boolean;
        loop: boolean;
        muted: boolean;
        playsInline: boolean;
        preload: string;
        themed: any[];
        width: string;
    };
}
export default Video;
export default Video;
