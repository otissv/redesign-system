import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { setTheme, sharedStyles } from '../utils'
import { ThemeConsumer } from '../ThemeContext'
import { FloatContext } from './FloatLabelContext'
import { Input } from '../Input'

import { floatLabelTheme } from './floatLabel.theme'
import { FloatLabelLabel as Label } from './FloatLabelLabel'

export const FloatLabelStyled = styled.div`
  ${floatLabelTheme};
  ${sharedStyles};
  ${props => props.styled};
`

export function FloatLabel(props) {
  const {
    size,
    widths,
    placeholder,
    context,
    disabled,
    label,
    labelProps,
    value,
    onBlur,
    onChange,
    onFocus,
  } = this.props

  const [_, { setFloating }] = useContext(FloatContext)

  // useEffect(() => {
  //   setFloating(true)
  // })
  // componentDidMount() {
  //   if (this.props.value) {
  //     this.setState({ floating: true });
  //   }
  //   if (this.props.element && this.props.element.value) {
  //     this.props.onFloatLabel();
  //   }
  // }

  // onBlur = event => {
  //   if (event.target.value.trim() === '' && this.state.floating === true) {
  //     this.setState({ floating: false });
  //   }

  //   if (this.props.onBlur) this.props.onBlur(event);
  // };

  // onChange = event => {
  //   if (this.props.onChange) this.props.onChange(event);
  // };

  // onFocus = event => {
  //   if (this.state.floating === false) {
  //     this.setState({ floating: true });
  //   }

  //   if (this.props.onFocus) this.props.onFocus(event);
  // };

  const themeContext = setTheme(this.props.theme, theme)

  return (
    <FloatLabelStyled theme={themeContext}>
      <div>
        {this.props.children}
        <Label
          context={context}
          theme={themeContext}
          floating={this.props.floating || this.state.floating}
          {...labelProps}>
          {label}
        </Label>
      </div>
    </FloatLabelStyled>
  )
}

FloatLabel.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  context: PropTypes.oneOf([
    'accent',
    'blank',
    'danger',
    'primary',
    'success',
    'warning',
    'disabled',
  ]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(['text', 'textarea']),
  floating: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  widths: PropTypes.string,
  theme: PropTypes.object,
  styled: PropTypes.string,
}

FloatLabel.defaultProps = {
  active: false,
  context: null,
  element: 'text',
  floating: false,
  disabled: null,
  label: null,
  labelProps: {},
}

export default FloatLabel
