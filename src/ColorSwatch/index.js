import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ColorBar } from './ColorBar'
import { useTheme, useContrastingText, isHexColor } from '../theme'

const NOOP = () => {}

const Root = styled.div`
  display: flex;
  margin-bottom: 7px;
`

const ColorInput = useTheme(styled.input`
  color: ${p => useContrastingText(p.$theme.background300)}
  margin-left: 5px;
  border: 1px solid ${p => p.$theme.keyline};
  border-radius: 2px;
  background-color: ${p => p.$theme.background300};
  padding: 4px;
  text-transform: uppercase;

  &:disabled {
    color: ${p => p.$theme.textDisabled};
  }
`)

export class ColorSwatch extends React.Component {
  static displayName = 'ColorSwatch'
  static propTypes = {
    hex: PropTypes.string,
    colorName: PropTypes.string,
    onColorChange: PropTypes.func,
    isDisabled: PropTypes.bool,
  }
  static defaultProps = {
    onColorChange: NOOP,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.hex,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { hex } = this.props
    const { value } = this.state

    if (nextProps.hex !== hex) {
      this.setState({
        value: nextProps.hex,
      })
      return true
    }

    if (nextState.value !== value) {
      return true
    }

    return false
  }

  onHexChange = e => {
    const newVal = e.target.value

    if (isHexColor(newVal)) {
      this.props.onColorChange(newVal)
    }

    this.setState({
      value: newVal,
    })
  }

  render() {
    const { hex, colorName, isDisabled } = this.props
    const { value } = this.state

    return (
      <Root>
        <ColorBar {...{ hex, colorName }} />
        <ColorInput
          type="text"
          value={value}
          onChange={this.onHexChange}
          disabled={isDisabled}
        />
      </Root>
    )
  }
}
