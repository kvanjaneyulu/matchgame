import React from 'react'
import './TabItem.css'

const TabItem = ({tabDetails, isActive, setActiveTabId}) => {
  const {tabId, displayText} = tabDetails
  const activeClass = isActive ? 'active-tab' : ''

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
