import React from 'react'
import { ColorGroup } from './ColorGroup'
import { ColorSwatch } from '../ColorSwatch'
import { useTheme, updateTheme } from '../theme'

const TextColorsVisual = ({ $theme }) => (
  <ColorGroup>
    <ColorSwatch
      {...{
        hex: $theme.text,
        colorName: 'Text',
        description: 'default text, drop shadows',
        onColorChange: val => updateTheme({ key: 'text', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.textInverse,
        colorName: 'Text Inverse',
        description: 'default text (opposite darkness)',
        onColorChange: val => updateTheme({ key: 'textInverse', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.textMeta,
        colorName: 'Text Meta',
        description: 'placeholder, metadata',
        onColorChange: val => updateTheme({ key: 'textMeta', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.textDisabled,
        colorName: 'Text Disabled',
        description: 'disabled text',
        onColorChange: val => updateTheme({ key: 'textDisabled', val }),
      }}
    />
    <ColorSwatch
      {...{
        hex: $theme.link,
        colorName: 'Link',
        description: 'hyperlinks, focus style',
        onColorChange: val => updateTheme({ key: 'link', val }),
      }}
    />
  </ColorGroup>
)

export const TextColors = useTheme(TextColorsVisual)
