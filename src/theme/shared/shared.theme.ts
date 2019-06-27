import upperFirst from 'lodash/fp/upperFirst';
import {
  ThemeInterface,
  SharedInterface,
  UnitsInterface,
} from '../theme.types';
import { themeDefaults } from '../defaults.theme';

export function sharedTheme({
  border,
  elevate,
  radius,
  shared,
  unit,
}: ThemeInterface = themeDefaults) {
  const defaults: SharedInterface = {
    ...unitPositions({ unit, style: 'margin' }),
    ...unitPositions({ unit, style: 'padding' }),
    border: (value: string) => ({ border: border[value] }),
    borderBottom: (value: string) => ({ borderBottom: border[value] }),
    borderLeft: (value: string) => ({ borderLeft: border[value] }),
    borderRight: (value: string) => ({ borderRight: border[value] }),
    borderTop: (value: string) => ({ borderTop: border[value] }),
    radius: (value: string) => ({ borderRadius: radius[value] }),
    elevate: (value: string) => ({
      boxShadow: elevate[value],
    }),
    centered: () => ({ margin: '0 auto' }),

    // flex: (value: string) => ({ flex: value }),
    // flexGrow: (value: string) => ({ flexGrow: value }),
    // order: (value: string) => ({ order: value }),
    // display: (value: string) => ({ display: value }),

    widthSize: (value: string) => ({ width: value }),
    // fontSize: (value: string) => ({
    //   fontSize: value === 'default' ? font.size.default : font.size[value],
    // }),
    // lineHeight: (value: string) => ({
    //   lineHeight:
    //     value === 'default' ? font.lineHeight.default : font.lineHeight[value],
    // }),
    // fontWeight: (value: string) => ({
    //   fontWeight:
    //     value === 'default' ? font.weight.default : font.weight[value],
    // }),
    ...shared,
  };
  return defaults;
}

interface UnitPositionsInterface {
  unit: UnitsInterface;
  style: string;
}

export function unitPositions({ unit, style }: UnitPositionsInterface) {
  const isValidStringValue = (value: any) =>
    typeof value === 'string' || value.trim() !== '';

  const isValidNumberValue = (value: any) =>
    typeof value === 'number' || value < 0;

  const isValidUnitValue = (value: any) =>
    value !== 'string' &&
    isValidStringValue(value) &&
    value.match(/%|px|rem|em|auto/);

  function allPositions(value: string | number, prop: string) {
    switch (true) {
      case value === 'default':
        return { [prop]: unit.default };
      case isValidNumberValue(value):
        return { [prop]: unit[value] };
      case isValidUnitValue(value) || isValidStringValue(value):
        return { [prop]: value };
      default:
        return undefined;
    }
  }

  const reducer = (accumulator: { [key: string]: any }, key: string): any => {
    if (key === 'default') return accumulator;

    const prop = `${style}${upperFirst(key)}`;

    return {
      ...accumulator,
      [prop]: (value: string) => {
        if (!isValidStringValue(value)) return {};

        let positions = value.split(' ');

        return Object.keys(positions).reduce(
          (accum, pos: string) => ({
            ...accum,
            [`${style}-${positions[pos]}`]: unit[key],
          }),
          {}
        );
      },
    };
  };

  const initial = {
    [style]: (value: string) => allPositions(value, style),
    [`${style}Bottom`]: (value: string) =>
      allPositions(value, `${style}Bottom`),
    [`${style}Left`]: (value: string) => allPositions(value, `${style}Left`),
    [`${style}Right`]: (value: string) => allPositions(value, `${style}Right`),
    [`${style}Top`]: (value: string) => allPositions(value, `${style}Top`),
  };

  return Object.keys(unit).reduce(reducer, initial);
}
