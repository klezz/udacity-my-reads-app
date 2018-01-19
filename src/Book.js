import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    info: PropTypes.object.isRequired,
    onChangeBook: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    this.props.onChangeBook(this.props.info, event.target.value)
  }

  render(){

    const { info } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${info.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={info.shelf} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{info.title}</div>
        <div className="book-authors">{info.authors}</div>
      </div>
    )
  }
}

export default Book