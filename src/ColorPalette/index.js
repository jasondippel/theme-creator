import React from 'react'
import styled from 'styled-components'
import { TextColors } from './TextColors'
import { BackgroundColors } from './BackgroundColors'
import { AccentColors } from './AccentColors'
import { useTheme } from '../theme'

const Root = useTheme(styled.div`
  display: flex;
  flex-direction: column;

  color: ${p => p.$theme.text};
  font-family: 'Roboto', sans-serif;
`)

export const ColorPalette = () => (
  <Root>
    <TextColors />
    <BackgroundColors />
    <AccentColors />
  </Root>
)
