import React from 'react'
import styled from 'styled-components'
import { TabPanel } from '../TabPanel'
import { useTheme } from '../theme'

import { TextColors } from './TextColors'
import { BackgroundColors } from './BackgroundColors'
import { AccentColors } from './AccentColors'

const Root = useTheme(styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  border-top: 1px solid ${p => p.$theme.keyline};
`)

export const ColorPalette = () => (
  <Root>
    <TabPanel
      {...{
        tabs: [
          {
            label: 'Text',
            render: () => <TextColors />,
          },
          {
            label: 'Background',
            render: () => <BackgroundColors />,
          },
          {
            label: 'Accents',
            render: () => <AccentColors />,
          },
        ],
      }}
    />
  </Root>
)
