import { BaseInterface } from '../Base';
import { AppearanceMinType } from '../theme';
export declare enum As {
    a = "a",
    code = "code",
    del = "del",
    em = "em",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    hr = "hr",
    ins = "ins",
    q = "q",
    p = "p",
    span = "span",
    strong = "strong"
}
export declare enum Modify {
    lead = "lead",
    meta = "meta"
}
export declare enum TextAlign {
    left = "left",
    leftSmall = "leftSmall",
    leftMedium = "leftMedium",
    leftLarge = "leftLarge",
    right = "right",
    rightSmall = "rightSmall",
    rightMedium = "rightMedium",
    rightLarge = "rightLarge",
    center = "center",
    centerSmall = "centerSmall",
    centerMedium = "centerMedium",
    centerLarge = "centerLarge",
    justify = "justify"
}
export declare enum TextTransform {
    capitalize = "capitalize",
    lowercase = "lowercase",
    uppercase = "uppercase"
}
export declare enum TextVertical {
    top = "top",
    middle = "middle",
    bottom = "bottom"
}
export declare enum TextWrap {
    truncate = "truncate",
    break = "break",
    nowrap = "nowrap"
}
export interface TypographyInterface extends BaseInterface {
    appearance?: AppearanceMinType;
    as?: As;
    href?: string;
    modify?: Modify;
    textAlign?: TextAlign;
    textTransform?: TextTransform;
    textWrap?: TextWrap;
    textVertical?: TextVertical;
}
