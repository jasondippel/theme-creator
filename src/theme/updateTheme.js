import PubSub from 'pubsub-js'
import { THEME_UPDATE_EVENT } from './config'

export const updateTheme = ({ key, val }) => {
  if (!window.$theme) return

  window.$theme[key] = val
  PubSub.publish(THEME_UPDATE_EVENT)
}
