import React from 'react'
import styled from 'styled-components'

const Root = styled.div``

const GroupTitle = styled.h3``
const SubGroupTitle = styled.h4`
  margin: 0.75em 0;
`

const GroupColors = styled.div``

export const ColorGroup = ({ title, subTitle, children }) => (
  <Root>
    {!!title && <GroupTitle>{title}</GroupTitle>}
    {!!subTitle && <SubGroupTitle>{subTitle}</SubGroupTitle>}
    <GroupColors>{children}</GroupColors>
  </Root>
)
