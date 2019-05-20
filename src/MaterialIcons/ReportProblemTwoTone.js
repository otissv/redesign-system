
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ReportProblemTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3" /><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" /><path d="M11 16h2v2h-2zM11 10h2v4h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3" /><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" /><path d="M11 16h2v2h-2zM11 10h2v4h-2z" />
    </Icon>
  );
}
