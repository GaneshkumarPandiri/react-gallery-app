import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {list, thumbClicked, isActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = list

    const onThumbnailClick = () => {
      thumbClicked(id)
    }

    const active = isActive ? 'active-thumb' : 'thumb-image-style'

    return (
      <li className="thumb-list-style">
        <button
          type="button"
          className={`${active}`}
          onClick={onThumbnailClick}
        >
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
