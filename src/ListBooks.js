import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import BookShelf  from './BookShelf'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBook: PropTypes.func.isRequired
  }

  render() {
    
    const { books, onChangeBook } = this.props

    let reading = []
    let wantRead = []
    let read = []

    reading = books.filter((book) => 
      book.shelf === "currentlyReading"
    )

    wantRead = books.filter((book) => 
      book.shelf === "wantToRead"
    )

    read = books.filter((book) => 
      book.shelf === "read"
    )

    reading.sort(sortBy('title'))
    wantRead.sort(sortBy('title'))
    read.sort(sortBy('title'))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            
            <BookShelf
              title={"Currently Reading"}
              books={reading}
              onChangeBook={onChangeBook}
            />

            <BookShelf
              title={"Want to Read"}
              books={wantRead}
              onChangeBook={onChangeBook}
            />

            <BookShelf
              title={"Read"}
              books={read}
              onChangeBook={onChangeBook}
            />

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks