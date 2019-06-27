export function googleMapsTheme(_a) {
    var height = _a.height, width = _a.width;
    return {
        position: 'relative',
        textAlign: 'right',
        height: width,
        width: height,
        '.gmap_canvas': {
            overflow: 'hidden',
            background: 'none !important',
            height: 'inherit',
            width: 'inherit',
        },
    };
}
//# sourceMappingURL=googleMaps.theme.js.map