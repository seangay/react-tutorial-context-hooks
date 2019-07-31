import React, {createContext, useContext} from "react";

interface Book {
  title: string;
  id: string;
}

type Props = {
  children?: any;
};

type State = {
  books: Book[]
};

const initialState = {
  books: [
    {title: 'name of the wind', id: "1"},
    {title: 'the way of kings', id: "2"},
    {title: 'the final empire', id: "3"},
    {title: 'the hero of ages', id: "4"}
  ]
};

export const BookContext = createContext<State>(initialState);

const BookContextProvider = (props: Props) => {
  const {books} = useContext(BookContext);

  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;

