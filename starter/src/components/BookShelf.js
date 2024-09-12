import React from 'react'
import Book from './Book'

const BookShelf = props => {
    const {books, title, updateShelf} = props;
  return (
    <>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  updateShelf={updateShelf}
                />
              </li>
            ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default BookShelf
