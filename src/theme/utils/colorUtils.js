/**
 * Determine if value is valid hex color code
 * @param val A hex value (ex #fff, #ffffff)
 **/
export const isHexColor = val => {
  if (val[0] !== '#') return false
  val = val.substr(1)
  return (
    typeof val === 'string' &&
    (val.length === 6 || val.length === 3) &&
    !isNaN(parseInt(val, 16))
  )
}

const formatHexColor = hex => {
  if (hex[0] === '#') hex = hex.substr(1) // remove starting '#'
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  return `#${hex}`
}

/**
 * Get red, green, and blue components from hex color code
 **/
export const hexToRgb = hex => {
  if (!isHexColor(hex)) {
    // eslint-disable-next-line no-console
    console.error('hexToRgb called with non-hex value', hex)
    return
  }

  hex = formatHexColor(hex)
  hex = hex.substr(1) // remove starting '#'; guarenteed to be a `#` due to formatter

  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  return [r, g, b]
}

/**
 * Get hex color code from red, green, and blue components
 **/
export const rgbToHex = (r, g, b) => {
  if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0) {
    // eslint-disable-next-line no-console
    console.error('rgbToHex called with non-rgb value', `[${r}, ${g}, ${b}]`)
    return
  }

  let rHex = Number(r).toString(16)
  let gHex = Number(g).toString(16)
  let bHex = Number(b).toString(16)

  rHex = rHex.length < 2 ? '0' + rHex : rHex
  gHex = gHex.length < 2 ? '0' + gHex : gHex
  bHex = bHex.length < 2 ? '0' + bHex : bHex

  return `#${rHex}${gHex}${bHex}`
}

/*
 * Ensures RGB values are within acceptable range (0 --> 255)
 */
export const constrainRgb = (r, g, b) => {
  r = r > 255 ? 255 : r
  r = r < 0 ? 0 : r

  g = g > 255 ? 255 : g
  g = g < 0 ? 0 : g

  b = b > 255 ? 255 : b
  b = b < 0 ? 0 : b

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

  let [r, g, b] = hexToRgb(hex)

  // equation from http://alienryderflex.com/hsp.html
  const brightness = Math.sqrt(
    0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b),
  )

  return brightness > 127.5 ? false : true
}
