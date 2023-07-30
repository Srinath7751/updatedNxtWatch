import './index.css'

const Greeting = props => {
  const {details} = props
  const {imageUrl, imageAltText} = details

  return (
    <li className="list">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}

export default Greeting
