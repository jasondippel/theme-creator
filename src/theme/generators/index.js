import { generateText } from './textGenerator'
import { generateBackgrounds } from './backgroundGenerator'
import {
  generatePrimaryAccents,
  generateSuccessAccents,
  generateWarningAccents,
  generateErrorAccents,
} from './accentGenerator'

export const generateTheme = ({
  text,
  link,
  background300,
  background500,
  keyline,
  primary,
  error,
  warning,
  success,
}) => {
  const { textInverse, textMeta, textDisabled } = generateText({ text })

  const { background100, background200, background400 } = generateBackgrounds({
    background300,
    background500,
    keyline,
  })

  const { primaryAccent, primaryBackground } = generatePrimaryAccents(primary)
  const { successAccent, successBackground } = generateSuccessAccents(success)
  const { warningAccent, warningBackground } = generateWarningAccents(warning)
  const { errorAccent, errorBackground } = generateErrorAccents(error)

  return {
    text,
    textInverse,
    textMeta,
    textDisabled,
    link,
    background100,
    background200,
    background300,
    background400,
    background500,
    keyline,
    primary,
    primaryAccent: primaryAccent,
    primaryBackground: primaryBackground,
    success,
    successAccent: successAccent,
    successBackground: successBackground,
    warning,
    warningAccent: warningAccent,
    warningBackground: warningBackground,
    error,
    errorAccent: errorAccent,
    errorBackground: errorBackground,
  }
}
