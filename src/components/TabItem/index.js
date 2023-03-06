import './index.css'

const TabItem = props => {
  const {e, key, chng} = props
  const {tabId, displayText} = e

  const bn = () => {
    chng(tabId)
  }

  return (
    <li className="m">
      <button type="button" onClick={bn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
