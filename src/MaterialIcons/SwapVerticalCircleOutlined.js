
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SwapVerticalCircleOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M6.5 9L10 5.5 13.5 9H11v4H9V9zM17.5 15L14 18.5 10.5 15H13v-4h2v4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M6.5 9L10 5.5 13.5 9H11v4H9V9zM17.5 15L14 18.5 10.5 15H13v-4h2v4z" /></g>
    </Icon>
  );
}
