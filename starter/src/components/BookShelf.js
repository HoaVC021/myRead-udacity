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
                <Book
                  key={index}
                  book={book}
                  updateShelf={updateShelf}
                />
            ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default BookShelf
