
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChangeHistory (props) {
  return (
    <Icon {...props}>
      <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
