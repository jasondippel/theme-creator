import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../theme'

import { TabMenu } from './TabMenu'

const Root = useTheme(styled.div`
  display: flex;
  flex-direction: column;
`)

const TabBody = useTheme(styled.div`
  padding: 8px;
  overflow-y: auto;
`)

export class TabPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openTab: props.openTab || 0,
    }
  }

  handleClick = newActiveTab =>
    this.setState({
      ...{
        ...this.state,
        openTab: newActiveTab,
      },
    })

  render() {
    const { openTab } = this.state
    const { tabs } = this.props

    return (
      <Root>
        <TabMenu
          {...{ tabs, activeTab: openTab, handleClick: this.handleClick }}
        />
        <TabBody>{tabs[openTab].render()}</TabBody>
      </Root>
    )
  }
}
