import { getTheme, hexToHsl, hslToHex } from '../utils'

/**
 * TODO: Consider mixing HSL colors in V2
 * https://stackoverflow.com/questions/35816179/calculation-algorithm-to-mix-3-hsl-colors
 **/

const H = 0
const S = 1
const L = 2

const computeAccent = color => {
  const colorHsl = hexToHsl(color)

  console.log('hsl value', colorHsl)

  const accentHsl = [
    colorHsl[H],
    Math.min(
      colorHsl[L] < 50
        ? colorHsl[S] - colorHsl[S] * 0.1
        : colorHsl[S] + colorHsl[S] * 0.1,
      100,
    ),
    Math.min(
      colorHsl[L] < 50
        ? colorHsl[L] + (6 * (100 - colorHsl[L])) / 9
        : colorHsl[L] + (4 * (100 - colorHsl[L])) / 9,
      100,
    ),
  ]

  return hslToHex(...accentHsl)
}

const computeBackground = color => {
  const colorHsl = hexToHsl(color)
  const accentHsl = [
    colorHsl[H],
    Math.min(
      colorHsl[L] < 50
        ? colorHsl[S] - colorHsl[S] * 0.1
        : colorHsl[S] + colorHsl[S] * 0.1,
      100,
    ),
    Math.min(
      colorHsl[L] < 50
        ? colorHsl[L] + colorHsl[L] * 0.4 + (100 - colorHsl[L]) / 4
        : colorHsl[L] + colorHsl[L] * 0.4,
      100,
    ),
  ]

  return hslToHex(...accentHsl)
}

export const generatePrimaryAccents = primary => {
  const $theme = getTheme()

  console.log('computing primary')
  return {
    primary,
    primaryAccent: computeAccent(primary),
    primaryBackground: $theme.primaryBackground,
  }
}

export const generateSuccessAccents = success => {
  const $theme = getTheme()

  console.log('computing success')
  return {
    success,
    successAccent: computeAccent(success),
    successBackground: $theme.successBackground,
  }
}

export const generateWarningAccents = warning => {
  const $theme = getTheme()

  console.log('computing warning')
  return {
    warning,
    warningAccent: computeAccent(warning),
    warningBackground: $theme.warningBackground,
  }
}
export const generateErrorAccents = error => {
  const $theme = getTheme()

  console.log('computing error')
  return {
    error,
    errorAccent: computeAccent(error),
    errorBackground: $theme.errorBackground,
  }
}
