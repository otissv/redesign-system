
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function AlarmTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z" opacity=".3" /><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM17.3365 1.811l4.6074 3.8436-1.2812 1.5358-4.6074-3.8436zM6.6633 1.8104l1.2812 1.5358-4.6074 3.8436L2.056 5.654z" /><path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z" opacity=".3" /><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM17.3365 1.811l4.6074 3.8436-1.2812 1.5358-4.6074-3.8436zM6.6633 1.8104l1.2812 1.5358-4.6074 3.8436L2.056 5.654z" /><path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" /></g>
    </Icon>
  );
}
