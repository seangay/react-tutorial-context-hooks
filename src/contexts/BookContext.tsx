import React, {createContext, useReducer, useEffect} from "react";
import {BookReducer} from "../reducers/BookReducer";

export interface Book {
  title: string;
  author: string;
  id: string;
}

type State = {
  books: Book[];
  dispatch?: Function;
};

const initialState = {
  books: []
};

// @ts-ignore
export const BookContext = createContext<State>();

const BookContextProvider = (props: any) => {
  const [books, dispatch] = useReducer(BookReducer, initialState, () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books]);

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider
