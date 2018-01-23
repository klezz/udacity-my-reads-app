import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookStatus = (book, shelf) => {
    BooksAPI.update(book, shelf).then((result) => {
      this.getAllBooks();
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ListBooks 
              books={this.state.books}
              onChangeBook={this.changeBookStatus}
            />
          )}
        />
        <Route path='/search' render={() => (
            <SearchBooks
              booksOnShelf={this.state.books}
              onChangeBook={this.changeBookStatus}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
