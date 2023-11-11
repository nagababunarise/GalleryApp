import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onSelectedImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailStyle = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    onSelectedImage(id)
  }
  return (
    <li className="thumb-list">
      <button type="button" onClick={onClickThumbnail} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailStyle}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
