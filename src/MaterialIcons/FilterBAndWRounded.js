
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FilterBAndWRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1v13z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1v13z" /></g>
    </Icon>
  );
}
