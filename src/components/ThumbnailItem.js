import React from 'react'
import './ThumbnailItem.css'

const ThumbnailItem = ({imageDetails, handleThumbnailClick}) => {
  const {thumbnailUrl, imageUrl} = imageDetails

  const onClickThumbnail = () => {
    handleThumbnailClick(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
