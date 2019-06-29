import React from 'react'
import { ColorGroup } from '../ColorGroup'
import { ColorSwatch } from '../../ColorSwatch'
import { useTheme, updateTheme } from '../../theme'

const ErrorColorsVisual = ({ $theme }) => (
  <ColorGroup subTitle={'Error'}>
    <ColorSwatch
      {...{
        hex: $theme.error,
        colorName: 'Error',
        description: 'error',
        onColorChange: val => updateTheme({ key: 'error', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.errorAccent,
        colorName: 'Error Accent',
        description: 'accent',
        onColorChange: val => updateTheme({ key: 'errorAccent', val }),
        isDisabled: true,
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.errorBackground,
        colorName: 'Error Background',
        description: 'background',
        onColorChange: val => updateTheme({ key: 'errorBackground', val }),
        isDisabled: true,
      }}
    />
  </ColorGroup>
)

export const ErrorColors = useTheme(ErrorColorsVisual)
