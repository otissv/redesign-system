import * as tslib_1 from "tslib";
// function getResponsiveImg(sizes) {
//   return size => sizes[size]
// }
export function coverImgTheme(_a) {
    var cover = _a.cover, height = _a.height, parallax = _a.parallax, position = _a.position, repeat = _a.repeat, src = _a.src, width = _a.width, animation = _a.theme.animation;
    // const _responsive = responsive
    //   ? getResponsiveImg({ small, medium, large, xlarge })(responsive)
    //   : { height, width, src }
    return tslib_1.__assign({ position: 'relative', display: 'flex', backgroundImage: "url(" + src + ")", height: height,
        width: width, transition: animation.easeMedium() }, (parallax ? { backgroundAttachment: 'fixed' } : {}), (position ? { backgroundPosition: '50% 50%' } : {}), (cover ? { backgroundSize: 'cover' } : {}), (repeat ? { backgroundRepeat: 'no-repeat' } : {}));
}
//# sourceMappingURL=coverImg.theme.js.map