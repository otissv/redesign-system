import {
  AccordionInterface,
  AccordionButtonInterface,
  AccordionIconInterface,
  AccordionContentInterface,
  AccordionItemInterface,
} from './accordion.types';

export function accordionTheme({ theme: { animation } }: AccordionInterface) {
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    transition: animation.easeMedium(),
  };
}

export function accordionButtonTheme({  }: AccordionButtonInterface) {
  return {
    textAlign: 'left',
    borderRadius: 0,
  };
}

export function accordionIconTheme({
  active,
  theme: { animation, unit },
}: AccordionIconInterface) {
  return {
    float: 'right',
    padding: unit[2],
    transform: active ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
    transition: animation.easeMedium(),
  };
}

export function accordionContentTheme({
  theme: { animation },
}: AccordionContentInterface) {
  return {
    overflow: 'hidden',
    padding: 0,
    transition: animation.easeMedium(),
  };
}

export function accordionItemTheme({
  theme: { animation },
}: AccordionItemInterface) {
  return {
    cursor: 'pointer',
    display: 'list-item',
    lineHeight: 1.4,
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    textAlign: '-webkit-match-parent',
    transition: animation.easeMedium(),
  };
}
