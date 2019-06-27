export function imgTheme(_a) {
    var height = _a.height, width = _a.width, animation = _a.theme.animation;
    return {
        display: 'inline-block',
        height: height || 'auto',
        maxWidth: '100%',
        width: width || 'auto',
        transition: animation.easeInMedium(),
    };
}
export function imgSizeTheme(_a) {
    var widths = _a.widths;
    switch (widths) {
        case 1:
            return { width: '150px' };
        case 2:
            return { width: '200px' };
        case 3:
            return { width: '300px' };
        case 4:
            return { width: '400px' };
        case 5:
            return { width: '480px' };
        case 6:
            return { width: '600px' };
        case 7:
            return { width: '640px' };
        case 8:
            return { width: '768px' };
        case 9:
            return { width: '800' };
        case 10:
            return { width: '960' };
        case 11:
            return { width: '1024px' };
        case 12:
            return { width: '1280px' };
        default:
            return { width: '100%' };
    }
}
//# sourceMappingURL=img.theme.js.map