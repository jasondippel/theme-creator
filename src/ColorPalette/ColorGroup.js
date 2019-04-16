import React from 'react'
import styled from 'styled-components'

const Root = styled.div``

const GroupColors = styled.div``

export const ColorGroup = ({ children }) => (
  <Root>
    <GroupColors>{children}</GroupColors>
  </Root>
)
