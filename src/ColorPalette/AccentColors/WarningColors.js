import React from 'react'
import { ColorGroup } from '../ColorGroup'
import { ColorSwatch } from '../../ColorSwatch'
import { useTheme, updateTheme } from '../../theme'

const WarningColorsVisual = ({ $theme }) => (
  <ColorGroup subTitle={'Warning'}>
    <ColorSwatch
      {...{
        hex: $theme.warning,
        colorName: 'Warning',
        description: 'warning',
        onColorChange: val => updateTheme({ key: 'warning', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.warningAccent,
        colorName: 'Warning Accent',
        description: 'accent',
        onColorChange: val => updateTheme({ key: 'warningAccent', val }),
        isDisabled: true,
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.warningBackground,
        colorName: 'Warning Background',
        description: 'background',
        onColorChange: val => updateTheme({ key: 'warningBackground', val }),
        isDisabled: true,
      }}
    />
  </ColorGroup>
)

export const WarningColors = useTheme(WarningColorsVisual)
