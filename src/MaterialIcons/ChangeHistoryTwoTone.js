
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChangeHistoryTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 7.77L5.61 18h12.78z" opacity=".3" /><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 7.77L5.61 18h12.78z" opacity=".3" /><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" /></g>
    </Icon>
  );
}