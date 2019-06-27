import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
export function FormErrorMessage(_a) {
    var message = _a.message;
    return React.createElement(ErrorMessage, { className: "FormErrorMessage" }, message);
}
FormErrorMessage.protoType = {
    message: PropTypes.string,
};
export default FormErrorMessage;
//# sourceMappingURL=FormErrorMessage.js.map