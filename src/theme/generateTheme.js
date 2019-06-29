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

  const primaryValues = generateAccents(primary)
  const successValues = generateAccents(success)
  const warningValues = generateAccents(warning)
  const errorValues = generateAccents(error)

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
    primaryAccent: primaryValues.accent,
    primaryBackground: primaryValues.background,
    success,
    successAccent: successValues.accent,
    successBackground: successValues.background,
    warning,
    warningAccent: warningValues.accent,
    warningBackground: warningValues.background,
    error,
    errorAccent: errorValues.accent,
    errorBackground: errorValues.background,
  }
}

const generateText = ({ text }) => {
  return {
    textInverse,
    textMeta,
    textDisabled,
  }
}

const generateBackgrounds = ({ background300, background500, keyline }) => {
  return {
    background100,
    background200,
    background400,
  }
}

const generateAccents = base => {
  return {
    accent,
    background,
  }
}
