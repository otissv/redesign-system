
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Category (props) {
  return (
    <Icon {...props}>
      <path d="M12 2l-5.5 9h11z" /><circle cx="17.5" cy="17.5" r="4.5" /><path d="M3 13.5h8v8H3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2l-5.5 9h11z" /><circle cx="17.5" cy="17.5" r="4.5" /><path d="M3 13.5h8v8H3z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
