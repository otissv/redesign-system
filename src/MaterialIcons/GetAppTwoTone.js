
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function GetAppTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zM5 18h14v2H5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zM5 18h14v2H5z" /></g>
    </Icon>
  );
}
