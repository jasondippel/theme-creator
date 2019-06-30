import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../theme'

const ACTIVE_BORDER_WIDTH = '2px'

const Root = useTheme(styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: ${p => p.$theme.background300};
  border-bottom: 1px solid ${p => p.$theme.keyline};
  height: 25px;
  max-height: 25px;
`)

const Label = useTheme(styled.div`
  padding: 0 8px;
  font-size: 12px;
`)

const TabButton = useTheme(styled.button`
  height: 26px;
  min-width: 60px;
  margin: 0;
  background-color: transparent;
  cursor: pointer;

  outline: none;

  border: 0;
  ${p =>
    p.active
      ? `border-bottom: ${ACTIVE_BORDER_WIDTH} solid ${p.$theme.primary};`
      : `border-bottom: ${ACTIVE_BORDER_WIDTH} solid transparent;`}

  &:hover {
    background-color: ${p => p.$theme.background400};
    ${p =>
      p.active
        ? `border-bottom: ${ACTIVE_BORDER_WIDTH} solid ${p.$theme.primary};`
        : `border-bottom: 1px solid ${p.$theme.keyline};`}
  }
`)

export const TabMenu = ({ tabs, activeTab, handleClick }) => (
  <Root>
    <Label>Colors:</Label>
    {tabs.map((tab, idx) => (
      <TabButton
        onClick={() => handleClick(idx)}
        active={idx === activeTab}
        title={tab.label}
        key={`tab-${tab.label}`}
      >
        {tab.label}
      </TabButton>
    ))}
  </Root>
)

export class TabPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openTab: props.openTab || 0,
    }
  }

  handleTabClick = () => {}

  render() {
    const { openTab } = this.state
    const { tabs } = this.props

    return (
      <Root>
        <TabMenu {...{ tabs, activeTab: openTab }} />
        {tabs[openTab].render()}
      </Root>
    )
  }
}
