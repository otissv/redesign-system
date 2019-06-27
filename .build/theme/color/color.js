import * as tslib_1 from "tslib";
import merge from 'lodash/fp/merge';
import { swatches as palette } from './color.swatches';
export function colorTheme(_a) {
    var _b = _a.color, color = _b === void 0 ? {} : _b, _c = _a.swatches, swatches = _c === void 0 ? {} : _c;
    var _swatches = merge(palette)(swatches);
    var colors = tslib_1.__assign({ foreground: _swatches[color['foreground']], background: _swatches[color['background']], foregroundInvert: _swatches[color['foregroundInvert']], backgroundInvert: _swatches[color['backgroundInvert']], transparent: 'rgba(0, 0, 0, 0)', outline: '#0077ff66', white: '#fff', black: '#000', default: _swatches[color['disabled'] + "-400"], default2: _swatches[color['disabled'] + "-500"], 'default-050': _swatches[color['disabled'] + "-050"], 'default-100': _swatches[color['disabled'] + "-100"], 'default-200': _swatches[color['disabled'] + "-200"], 'default-300': _swatches[color['disabled'] + "-300"], 'default-400': _swatches[color['disabled'] + "-400"], 'default-500': _swatches[color['disabled'] + "-500"], 'default-600': _swatches[color['disabled'] + "-600"], 'default-700': _swatches[color['disabled'] + "-700"], 'default-800': _swatches[color['disabled'] + "-800"], 'default-900': _swatches[color['disabled'] + "-900"], active: _swatches[color['active'] + "-400"], active2: _swatches[color['active'] + "-500"], 'active-050': _swatches[color['active'] + "-050"], 'active-100': _swatches[color['active'] + "-100"], 'active-200': _swatches[color['active'] + "-200"], 'active-300': _swatches[color['active'] + "-300"], 'active-400': _swatches[color['active'] + "-400"], 'active-500': _swatches[color['active'] + "-500"], 'active-600': _swatches[color['active'] + "-600"], 'active-700': _swatches[color['active'] + "-700"], 'active-800': _swatches[color['active'] + "-800"], 'active-900': _swatches[color['active'] + "-900"], accent: _swatches[color['accent'] + "-400"], accent2: _swatches[color['accent'] + "-500"], 'accent-050': _swatches[color['accent'] + "-050"], 'accent-100': _swatches[color['accent'] + "-100"], 'accent-200': _swatches[color['accent'] + "-200"], 'accent-300': _swatches[color['accent'] + "-300"], 'accent-400': _swatches[color['accent'] + "-400"], 'accent-500': _swatches[color['accent'] + "-500"], 'accent-600': _swatches[color['accent'] + "-600"], 'accent-700': _swatches[color['accent'] + "-700"], 'accent-800': _swatches[color['accent'] + "-800"], 'accent-900': _swatches[color['accent'] + "-900"], action: _swatches[color['action'] + "-400"], action2: _swatches[color['action'] + "-500"], 'action-050': _swatches[color['action'] + "-050"], 'action-100': _swatches[color['action'] + "-100"], 'action-200': _swatches[color['action'] + "-200"], 'action-300': _swatches[color['action'] + "-300"], 'action-400': _swatches[color['action'] + "-400"], 'action-500': _swatches[color['action'] + "-500"], 'action-600': _swatches[color['action'] + "-600"], 'action-700': _swatches[color['action'] + "-700"], 'action-800': _swatches[color['action'] + "-800"], 'action-900': _swatches[color['action'] + "-900"], danger: _swatches[color['danger'] + "-400"], danger2: _swatches[color['danger'] + "-500"], 'danger-050': _swatches[color['danger'] + "-050"], 'danger-100': _swatches[color['danger'] + "-100"], 'danger-200': _swatches[color['danger'] + "-200"], 'danger-300': _swatches[color['danger'] + "-300"], 'danger-400': _swatches[color['danger'] + "-400"], 'danger-500': _swatches[color['danger'] + "-500"], 'danger-600': _swatches[color['danger'] + "-600"], 'danger-700': _swatches[color['danger'] + "-700"], 'danger-800': _swatches[color['danger'] + "-800"], 'danger-900': _swatches[color['danger'] + "-900"], warning: _swatches[color['warning'] + "-400"], warning2: _swatches[color['warning'] + "-500"], 'warning-050': _swatches[color['warning'] + "-050"], 'warning-100': _swatches[color['warning'] + "-100"], 'warning-200': _swatches[color['warning'] + "-200"], 'warning-300': _swatches[color['warning'] + "-300"], 'warning-400': _swatches[color['warning'] + "-400"], 'warning-500': _swatches[color['warning'] + "-500"], 'warning-600': _swatches[color['warning'] + "-600"], 'warning-700': _swatches[color['warning'] + "-700"], 'warning-800': _swatches[color['warning'] + "-800"], 'warning-900': _swatches[color['warning'] + "-900"], success: _swatches[color['success'] + "-400"], success2: _swatches[color['success'] + "-500"], 'success-050': _swatches[color['success'] + "-050"], 'success-100': _swatches[color['success'] + "-100"], 'success-200': _swatches[color['success'] + "-200"], 'success-300': _swatches[color['success'] + "-300"], 'success-400': _swatches[color['success'] + "-400"], 'success-500': _swatches[color['success'] + "-500"], 'success-600': _swatches[color['success'] + "-600"], 'success-700': _swatches[color['success'] + "-700"], 'success-800': _swatches[color['success'] + "-800"], 'success-900': _swatches[color['success'] + "-900"], disabled: _swatches[color['disabled'] + "-400"], disabled2: _swatches[color['disabled'] + "-500"], 'disabled-050': _swatches[color['disabled'] + "-050"], 'disabled-100': _swatches[color['disabled'] + "-100"], 'disabled-200': _swatches[color['disabled'] + "-200"], 'disabled-300': _swatches[color['disabled'] + "-300"], 'disabled-400': _swatches[color['disabled'] + "-400"], 'disabled-500': _swatches[color['disabled'] + "-500"], 'disabled-600': _swatches[color['disabled'] + "-600"], 'disabled-700': _swatches[color['disabled'] + "-700"], 'disabled-800': _swatches[color['disabled'] + "-800"], 'disabled-900': _swatches[color['disabled'] + "-900"] }, _swatches);
    return colors;
}
//# sourceMappingURL=color.js.map