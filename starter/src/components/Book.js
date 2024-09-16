import React from 'react'
import { update } from '../BooksAPI';

const Book = props => {
    const {book, updateShelf, isSearching} = props;
    const imageThumb = book.imageLinks?.smallThumbnail || null;

    const handleShelfChange = event => {
      if (event.target.value !== "move") {
        updateShelf(book, event.target.value)
      }
    };
    const handleShelfChangeOnSearchPage = event => {
      if (event.target.value !== "move") {
        update(book, event.target.value)
      }
    };
  return (
    <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${imageThumb})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={event => {
            if (isSearching) {
              handleShelfChangeOnSearchPage(event)
            }
            else {
              handleShelfChange(event);
            }
            }}
            defaultValue={book.shelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
  )
}

export default Book
