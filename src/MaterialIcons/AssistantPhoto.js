
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function AssistantPhoto (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    </Icon>
  );
}
