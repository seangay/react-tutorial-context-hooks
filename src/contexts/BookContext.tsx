import React, {createContext, useReducer} from "react";
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

export const BookContext = createContext<State>(initialState);

const BookContextProvider = (props: any) => {
  const [books, dispatch] = useReducer(BookReducer, initialState);

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider
