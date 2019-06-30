import { getTheme } from '../utils'

export const generatePrimaryAccents = primary => {
  const $theme = getTheme()

  return {
    primary,
    primaryAccent: $theme.primaryAccent,
    primaryBackground: $theme.primaryBackground,
  }
}

export const generateSuccessAccents = success => {
  const $theme = getTheme()

  return {
    success,
    successAccent: $theme.successAccent,
    successBackground: $theme.successBackground,
  }
}

export const generateWarningAccents = warning => {
  const $theme = getTheme()

  return {
    warning,
    warningAccent: $theme.warningAccent,
    warningBackground: $theme.warningBackground,
  }
}
export const generateErrorAccents = error => {
  const $theme = getTheme()

  return {
    error,
    errorAccent: $theme.errorAccent,
    errorBackground: $theme.errorBackground,
  }
}
