import './index.css'

const Bannercards = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div className="list-text-container">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">show more</button>
      </div>
    </li>
  )
}

export default Bannercards
