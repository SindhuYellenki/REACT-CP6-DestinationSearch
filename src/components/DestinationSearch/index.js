import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  onChangeEvent = event => {
    console.log(event.target.value)
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state

    const searchResultsList = destinationsList.filter(each =>
      each.name.includes(searchValue),
    )

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="searchContainer">
            <input
              type="search"
              placeholder="search"
              className="search"
              onChange={this.onChangeEvent}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchIcon"
            />
          </div>
          <ul className="imageContainer">
            {searchResultsList.map(each => (
              <DestinationItem eachItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
