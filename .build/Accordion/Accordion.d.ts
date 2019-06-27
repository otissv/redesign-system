/// <reference types="react" />
import PropTypes from 'prop-types';
import { AccordionInterface } from './accordion.types';
declare function Accordion({ active, children, className, themed, ...propsRest }: AccordionInterface): JSX.Element;
declare namespace Accordion {
    var defaultProps: {
        themed: any[];
    };
    var propTypes: {
        active: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: string;
        item: PropTypes.Requireable<object>;
        theme: PropTypes.Requireable<object>;
    };
}
export default Accordion;
export default Accordion;
