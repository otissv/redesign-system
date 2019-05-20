
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CreateNewFolderOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10z" /><path d="M12 14h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10z" /><path d="M12 14h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" />
    </Icon>
  );
}
