
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowRightAlt (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </Icon>
  );
}
