import React from 'react'
import { ColorGroup } from '../ColorGroup'
import { ColorSwatch } from '../../ColorSwatch'
import { useTheme, updateTheme } from '../../theme'

const PrimaryColorsVisual = ({ $theme }) => (
  <ColorGroup subTitle={'Primary'}>
    <ColorSwatch
      {...{
        hex: $theme.primary,
        colorName: 'Primary',
        description: 'primary',
        onColorChange: val => updateTheme({ key: 'primary', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.primaryAccent,
        colorName: 'Primary Accent',
        description: 'selected',
        onColorChange: val => updateTheme({ key: 'primaryAccent', val }),
        isDisabled: true,
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.primaryBackground,
        colorName: 'Primary Background',
        description: 'background',
        onColorChange: val => updateTheme({ key: 'primaryBackground', val }),
        isDisabled: true,
      }}
    />
  </ColorGroup>
)

export const PrimaryColors = useTheme(PrimaryColorsVisual)
