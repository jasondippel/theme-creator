import React from 'react'
import { ColorGroup } from './ColorGroup'
import { ColorSwatch } from '../ColorSwatch'
import { useTheme, updateTheme } from '../theme'

const BackgroundColorsVisual = ({ $theme }) => (
  <ColorGroup>
    <ColorSwatch
      {...{
        hex: $theme.background100,
        colorName: 'Background 100',
        onColorChange: val => updateTheme({ key: 'background100', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.background200,
        colorName: 'Background 200',
        onColorChange: val => updateTheme({ key: 'background200', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.background300,
        colorName: 'Background 300',
        onColorChange: val => updateTheme({ key: 'background300', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.background400,
        colorName: 'Background 400',
        onColorChange: val => updateTheme({ key: 'background400', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.background500,
        colorName: 'Background 500',
        onColorChange: val => updateTheme({ key: 'background500', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.keyline,
        colorName: 'Keyline',
        description: 'divider, border',
        onColorChange: val => updateTheme({ key: 'keyline', val }),
      }}
    />
  </ColorGroup>
)

export const BackgroundColors = useTheme(BackgroundColorsVisual)
