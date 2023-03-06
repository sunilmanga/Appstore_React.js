import './index.css'

const AppItem = props => {
  const {ec, keys} = props
  const {appName, imageUrl, category} = ec
  return (
    <div>
      <li className="mm">
        <img src={imageUrl} alt={appName} />
        <p>{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
