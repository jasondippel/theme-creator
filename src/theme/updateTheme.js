import PubSub from 'pubsub-js'
import { getTheme } from './utils'
import { generateTheme } from './generators'
import { THEME_UPDATE_EVENT } from './config'

export const updateTheme = ({ key, val }) => {
  if (!window.$theme) return

  const newTheme = generateTheme({
    ...getTheme(),
    [key]: val,
  })

  window.$theme = newTheme
  PubSub.publish(THEME_UPDATE_EVENT)
}
