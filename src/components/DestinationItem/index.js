import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachItem} = this.props
    const {name, imgUrl} = eachItem
    return (
      <li className="bg-container">
        <img className="imgStyling" src={imgUrl} alt={name} />
        <p className="name">{name.toLowerCase()}</p>
      </li>
    )
  }
}

export default DestinationItem
