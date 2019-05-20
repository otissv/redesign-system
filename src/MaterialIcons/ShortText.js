
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ShortText (props) {
  return (
    <Icon {...props}>
      <defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M4 9h16v2H4zm0 4h10v2H4z" />,<defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M4 9h16v2H4zm0 4h10v2H4z" />
    </Icon>
  );
}
