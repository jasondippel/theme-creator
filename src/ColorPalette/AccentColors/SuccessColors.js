import React from 'react'
import { ColorGroup } from '../ColorGroup'
import { ColorSwatch } from '../../ColorSwatch'
import { useTheme, updateTheme } from '../../theme'

const SuccessColorsVisual = ({ $theme }) => (
  <ColorGroup subTitle={'Success'}>
    <ColorSwatch
      {...{
        hex: $theme.success,
        colorName: 'Success',
        description: 'CTA, success',
        onColorChange: val => updateTheme({ key: 'success', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.successAccent,
        colorName: 'Success Accent',
        description: 'selected',
        onColorChange: val => updateTheme({ key: 'successAccent', val }),
        isDisabled: true,
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.successBackground,
        colorName: 'Success Background',
        description: 'background',
        onColorChange: val => updateTheme({ key: 'successBackground', val }),
        isDisabled: true,
      }}
    />
  </ColorGroup>
)

export const SuccessColors = useTheme(SuccessColorsVisual)
