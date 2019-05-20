
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CompareSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z" /></g>
    </Icon>
  );
}
