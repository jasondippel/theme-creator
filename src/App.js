import React from 'react'
import styled from 'styled-components'
import { ColorPalette } from './ColorPalette'
import { A11yPanel } from './A11yPanel'
import { useTheme, useContrastingText } from './theme'

const Root = useTheme(styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${p => p.$theme.background100};
  color: ${p => useContrastingText(p.$theme.background100)};
  font-family: 'Roboto', sans-serif;
`)

const App = () => (
  <Root>
    <A11yPanel />
    <ColorPalette />
  </Root>
)

export default App
