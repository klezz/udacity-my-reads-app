import React from 'react'
import PropTypes from 'prop-types';

//Stateless Functional Components
const Book = function( props ) {
  return (
    <div className="book">
      <div className="book-top">
        {props.info.hasOwnProperty('imageLinks') && (
          <div className="book-cover" style={{ backgroundImage: `url(${props.info.imageLinks.thumbnail})` }}></div>
        )}
        <div className="book-shelf-changer">
          <select value={props.info.shelf || 'none'} onChange={(event) => { props.onChangeBook(props.info, event.target.value) }}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.info.title}</div>
      <div className="book-authors">{props.info.authors}</div>
    </div>
  )
}

Book.propTypes = {
  info: PropTypes.object.isRequired,
  onChangeBook: PropTypes.func.isRequired
}

export default Book