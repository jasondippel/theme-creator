import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../theme'

const Root = useTheme(styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  overflow-y: auto;
`)

export const A11yPanel = () => <Root>a11y stuff</Root>
