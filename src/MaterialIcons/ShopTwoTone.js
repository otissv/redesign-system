
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ShopTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 19h16V8H4v11zM9 9l7.5 4L9 18V9z" opacity=".3" /><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11z" /><path d="M9 9v9l7.5-5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 19h16V8H4v11zM9 9l7.5 4L9 18V9z" opacity=".3" /><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11z" /><path d="M9 9v9l7.5-5z" />
    </Icon>
  );
}