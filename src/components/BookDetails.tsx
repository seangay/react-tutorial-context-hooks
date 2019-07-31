import React, {useContext} from 'react';
import {Book, BookContext} from "../contexts/BookContext";

export const BookDetails = ({book}: {book: Book}) => {
  const {removeBook} = useContext(BookContext);
  return (
    <div onClick={() => removeBook!(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </div>
  );
};
