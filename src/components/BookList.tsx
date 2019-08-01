import React, {useContext} from 'react';
import {Book, BookContext} from "../contexts/BookContext";
import {BookDetails} from "./BookDetails";

export const BookList = () => {
  const {books} = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book: Book)=> {
          return (<li key={book.id}><BookDetails book={book} /></li>)
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read.</div>
  );
};
