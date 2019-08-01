import React, {useContext} from 'react';
import {Book, BookContext} from "../contexts/BookContext";

export const BookDetails = ({book}: {book: Book}) => {
  const {dispatch} = useContext(BookContext);
  return (
    <div onClick={() => dispatch!({type: "REMOVE_BOOK", id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </div>
  );
};
