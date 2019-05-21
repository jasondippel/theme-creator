/**
 * Determine if value is valid hex color code
 * @param val A hex value (ex #fff, #ffffff)
 **/
export const isHexColor = val => {
  if (val[0] === '#') val = val.substr(1)
  return (
    typeof val === 'string' &&
    (val.length === 6 || val.length === 3) &&
    !isNaN(parseInt(val, 16))
  )
}
