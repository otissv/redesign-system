/// <reference types="react" />
import PropTypes from 'prop-types';
import { FormErrorMessageInterface } from '../Form';
declare function FormErrorMessage({ message }: FormErrorMessageInterface): JSX.Element;
declare namespace FormErrorMessage {
    var protoType: {
        message: PropTypes.Requireable<string>;
    };
}
export default FormErrorMessage;
export default FormErrorMessage;
