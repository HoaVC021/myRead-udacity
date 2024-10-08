import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "../BooksAPI";

import { Link } from 'react-router-dom';

const Search = props => {
  const [searchText, setSearchText] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearchTextChange = event => {
    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then(searched => {
        if (!searched.error) {
          BooksAPI.getAll().then(myBooks => {
            setSearchedBooks(setDefaultShelves(searched, myBooks));
            
          });
        } else {
          setSearchedBooks([]);
        }
        console.log(searchedBooks);
      });
    } else if (searchText.length === 0) {
      setSearchedBooks([]);
    }
  };

  const setDefaultShelves = (searchedBooksLocal, myBooks) => {
    return searchedBooksLocal.map(book => {
      for (let i = 0; i < myBooks.length; i++) {
        if (myBooks[i].id === book.id) {
          return { ...book, shelf: myBooks[i].shelf };
        }
      }
      return { ...book, shelf: "none" };
    });
  };
/* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    handleSearchTextChange();
  }, [searchText]);

  return (<>
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => navigate("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={event => setSearchText(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((book, index) => (
              <Book
                key={index}
                book={book}
                isSearching
              />
            ))}
        </ol>
      </div>
    </div>
    <div className="footer">
   <Link
      to='/'
    >
        Back To Home
    </Link>
   </div>
    </>
  );
};

export default Search;