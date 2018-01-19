import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

import Book from './Book'

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

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {reading.map((bookReading) => (
                    <li key={bookReading.id}>
                      <Book info={bookReading} onChangeBook={onChangeBook} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantRead.map((bookWantRead) => (
                    <li key={bookWantRead.id}>
                      <Book info={bookWantRead} onChangeBook={onChangeBook} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((bookRead) => (
                    <li key={bookRead.id}>
                      <Book info={bookRead} onChangeBook={onChangeBook} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

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