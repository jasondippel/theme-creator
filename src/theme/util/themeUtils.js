export const getThemeVal = ({ key }) => {
  if (!window.$theme) return
  return window.$theme[key]
}
