import React from 'react'
import styled from 'styled-components'
import { useTheme, useContrastingText } from '../theme'

const Bar = useTheme(styled.div`
  width: 175px;
  height: 30px;

  background-color: ${p => p.hex};
  border-radius: 2px;

  color: ${p => useContrastingText(p.hex)};
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`)

export const ColorBar = ({ colorName, hex }) => (
  <Bar {...{ hex }}>{colorName}</Bar>
)
