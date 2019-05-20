
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ReportProblemOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" /><path d="M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" /><path d="M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z" />
    </Icon>
  );
}
