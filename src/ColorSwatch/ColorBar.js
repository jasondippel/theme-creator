import React from 'react'
import styled from 'styled-components'
import { isDark } from '../util'
import { useTheme } from '../theme'

const Bar = useTheme(styled.div`
  width: 175px;
  height: 30px;

  background-color: ${p => p.hex};
  border-radius: 2px;

  ${p => isDark(p.hex) && `color: ${p.$theme.textInverse};`}
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`)

export const ColorBar = ({ colorName, hex }) => (
  <Bar {...{ hex }}>{colorName}</Bar>
)
