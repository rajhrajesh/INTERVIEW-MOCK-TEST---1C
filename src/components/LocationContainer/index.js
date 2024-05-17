import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, name, description} = locationData

  return (
    <li className="list-item">
      <div className="LocationCardContainer">
        <img src={imageUrl} alt={name} className="image" />
        <div className="HeadingDesContainer">
          <h1 className="Heading">{name}</h1>
          <p className="Paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationContainer
