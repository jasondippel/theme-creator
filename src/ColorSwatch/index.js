import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ColorBar } from './ColorBar'
import { isHexColor } from '../util'
import { useTheme, useContrastingText } from '../theme'

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
`)

export class ColorSwatch extends React.Component {
  static displayName = 'ColorSwatch'
  static propTypes = {
    hex: PropTypes.string,
    colorName: PropTypes.string,
    onColorChange: PropTypes.func,
  }
  static defaultProps = {
    onColorChange: NOOP,
  }

  onHexChange = e => {
    const newVal = e.target.value

    if (isHexColor(newVal)) {
      this.props.onColorChange(newVal)
    }
  }

  render() {
    const { hex, colorName } = this.props

    return (
      <Root>
        <ColorBar {...{ hex, colorName }} />
        <ColorInput
          type="text"
          defaultValue={hex}
          onChange={this.onHexChange}
        />
      </Root>
    )
  }
}
