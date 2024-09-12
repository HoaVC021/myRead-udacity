import "./App.css";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";
import  Bookshelf  from "./components/BookShelf";
import { Link } from 'react-router-dom';

const bookshelves = [
  { title: "Currently Reading", shelfName: "currentlyReading" },
  { title: "Want to Read", shelfName: "wantToRead" },
  { title: "Read", shelfName: "read" }
];

const App  = () => {
  const [allBook, setAllBook] = useState([]);

  const updateShelf = (book, shelf) => {
    update(book, shelf);
    if (shelf === 'none') {
      setAllBook(allBook.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setAllBook(
        allBook.filter((b) => b.id !== book.id).concat(book)
      );
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setAllBook(res);
    };
    getBooks();
  }, []);

  return (
    <div className="app">
     <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map((bookshelf, index) => (
              <Bookshelf
                key={index}
                title={bookshelf.title}
                books={
                  allBook &&
                  allBook.filter(
                    book => book && book.shelf === bookshelf.shelfName
                  )
                }
                updateShelf={updateShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
           <Link
                to='/search'
            >
                Add a book
            </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
