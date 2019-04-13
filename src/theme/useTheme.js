import React from 'react'
import PubSub from 'pubsub-js'
import { defaultTheme, VERSION } from './defaultTheme'
import { THEME_UPDATE_EVENT } from './config'

const initialize = () => {
  if (!!window.$themeVersion && window.$themeVersion >= VERSION) return

  const sendUpdate = !!window.$themeVersion

  window.$themeVersion = VERSION
  window.$theme = defaultTheme

  if (sendUpdate) PubSub.publish(THEME_UPDATE_EVENT)
}

const getTheme = () => window.$theme

export const useTheme = Comp =>
  class extends React.Component {
    constructor(props) {
      super(props)
      initialize()
    }

    componentDidMount() {
      this.mount = true
      this.unsubscribeToken = PubSub.subscribe(
        THEME_UPDATE_EVENT,
        this.handleThemeUpdate,
      )
    }

    componentWillUnmount() {
      this.mount = false
      PubSub.unsubscribe(this.unsubscribeToken)
    }

    handleThemeUpdate = () => this.forceUpdate()

    render() {
      return <Comp {...this.props} $theme={getTheme()} />
    }
  }
