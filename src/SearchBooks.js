import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBooks extends Component {
  
  static propTypes = {
    onChangeBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }


  updateQuery = (query) => {
    if(query.length > 0) {
      BooksAPI.search(query).then((books) => {
        this.setState({showingBooks: books.length > 0 ? books : []})        
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
                <Book info={book} onChangeBook={onChangeBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
