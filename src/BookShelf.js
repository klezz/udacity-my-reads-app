import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

//Stateless Functional Components
const BookShelf = function( props ) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {props.books.map((book) => (
            <li key={book.id}>
                <Book info={book} onChangeBook={props.onChangeBook} />
            </li>
            ))}
        </ol>
        </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
}

export default BookShelf