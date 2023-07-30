import './index.css'

const TabItem = props => {
  const {details, clickTabItem, isActive} = props
  const {buttonText, id} = details
  const buttonClassName = isActive ? 'clicked' : ''
  const onClickTabItem = () => {
    clickTabItem(id)
  }
  return (
    <li className="list-items">
      <button
        className={`button ${buttonClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
