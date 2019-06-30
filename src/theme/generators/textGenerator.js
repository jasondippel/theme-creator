import { isDark, hexToRgb, rgbToHex, constrainRgb } from '../utils'

const deltas = [
  {
    r: 46,
    g: 45,
    b: 46,
  },
  {
    r: 56,
    g: 55,
    b: 54,
  },
  {
    r: 96,
    g: 96,
    b: 96,
  },
]

const calculateColors = (textRgb, multiplier) => {
  let currentDeltas = deltas

  let results = [textRgb]
  const [r, g, b] = [0, 1, 2]
  for (let i = 0; i < 3; i++) {
    results[i + 1] = constrainRgb(
      results[i][r] + currentDeltas[i].r * multiplier,
      results[i][g] + currentDeltas[i].g * multiplier,
      results[i][b] + currentDeltas[i].b * multiplier,
    )
  }

  return results
}

export const generateText = ({ text }) => {
  const multiplier = isDark(text) ? 1 : -1

  const [
    textRgb,
    textMetaRgb,
    textDisabledRgb,
    textInverseRgb,
  ] = calculateColors(hexToRgb(text), multiplier)

  return {
    text: rgbToHex(...textRgb),
    textMeta: rgbToHex(...textMetaRgb),
    textDisabled: rgbToHex(...textDisabledRgb),
    textInverse: rgbToHex(...textInverseRgb),
  }
}
