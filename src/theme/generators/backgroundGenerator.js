import { getTheme } from '../utils'

export const generateBackgrounds = ({
  background300,
  background500,
  keyline,
}) => {
  const $theme = getTheme()

  return {
    background100: $theme.background100,
    background200: $theme.background200,
    background300,
    background400: $theme.background400,
    background500,
    keyline,
  }
}
