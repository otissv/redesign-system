
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RecentActorsOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 5h2v14h-2zM17 5h2v14h-2zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H3V7h10v10z" /><circle cx="8" cy="9.94" r="1.95" /><path d="M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78v-.65z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 5h2v14h-2zM17 5h2v14h-2zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H3V7h10v10z" /><circle cx="8" cy="9.94" r="1.95" /><path d="M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78v-.65z" />
    </Icon>
  );
}