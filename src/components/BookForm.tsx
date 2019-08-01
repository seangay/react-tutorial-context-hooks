import * as React from 'react';
import {useContext, useState} from 'react';
import {BookContext} from "../contexts/BookContext";

export const BookForm = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(title, author);

    dispatch!({type: "ADD_BOOK", book: {title, author}});
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
             onChange={(e) => {
               setTitle(e.target.value)
             }} required/>
      <input type="text" placeholder="book author" value={author}
             onChange={(e) => {
               setAuthor(e.target.value)
             }} required/>
      <button type="submit">Add book</button>
    </form>
  );
};
