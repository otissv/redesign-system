
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CompassCalibrationSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><circle cx="12" cy="17" r="4" /><path d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3z" /><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="12" cy="17" r="4" /><path d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3z" />
    </Icon>
  );
}
