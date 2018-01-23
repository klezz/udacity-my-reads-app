import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBooks extends Component {
  
  static propTypes = {
    onChangeBook: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  changeBookStatus = (book, shelf) => {
    let newStateShowingBooks = []

    newStateShowingBooks = this.state.showingBooks.map((currentBook) => {
      if(currentBook.id === book.id)
        currentBook.shelf = shelf

      return currentBook
    })

    this.setState({showingBooks: newStateShowingBooks})
    this.props.onChangeBook(book, shelf)
  }

  updateQuery = (query) => {
    if(query.length > 0) {
      BooksAPI.search(query).then((resultBooks) => {

        if(resultBooks.length > 0) {
          resultBooks = resultBooks.map((returnBook)=> {
            this.props.booksOnShelf.map((bookOnShelf) => {
              return returnBook = bookOnShelf.id === returnBook.id ? bookOnShelf : returnBook
            })
            return returnBook;
          });
          this.setState({showingBooks: resultBooks})     
        }else{
          this.setState({showingBooks:[]})
        }   
      })
    }else{
      this.setState({showingBooks:[]})
    }
    this.setState({ query: query })
  }

  render() {

    const { onChangeBook } = this.props
    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" >Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.showingBooks.map((book) => (
              <li key={book.id}>
                <Book info={book} onChangeBook={this.changeBookStatus} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
