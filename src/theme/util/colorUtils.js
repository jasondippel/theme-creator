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

/**
 * Get red, green, and blue components from hex color code
 **/
const hexToRgb = hex => {
  var bigint = parseInt(hex, 16)
  var r = (bigint >> 16) & 255
  var g = (bigint >> 8) & 255
  var b = bigint & 255

  return [r, g, b]
}

/**
 * Returns true if the given color is dark
 * @param hex hex string representation of the color (ex #e34510 or #f37)
 * @Returns true/false if the color is dark
 **/
export const isDark = hex => {
  if (!hex) return false
  if (!isHexColor(hex)) {
    // eslint-disable-next-line no-console
    console.error('isDark called with non-hex value')
    return false
  }
  hex = hex.substr(1) // remove starting '#'

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  let [r, g, b] = hexToRgb(hex)

  // equation from http://alienryderflex.com/hsp.html
  const brightness = Math.sqrt(
    0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b),
  )

  return brightness > 127.5 ? false : true
}
