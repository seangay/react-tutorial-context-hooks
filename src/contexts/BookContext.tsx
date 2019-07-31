import React, {createContext} from "react";
import uuid from "uuid";

export interface Book {
  title: string;
  author: string;
  id: string;
}

type Props = {};

type State = {
  books: Book[];
  addBook?: (title: string, author: string) => void;
  removeBook?: (id: string) => void;
};

const initialState = {
  books: [
    {title: 'name of the wind', author: 'patrick rothfuss', id: "1"},
    {title: 'the final empire', author: 'brandon sanderson', id: "2"},
  ]
};

export const BookContext = createContext<State>(initialState);

export class BookContextProvider extends React.Component<Props, State> {
  state: Readonly<State> = initialState;

  addBook = (title: string, author: string) => {
    this.setState({
      ...this.state,
      books: [...this.state.books, {title: title, author: author, id: uuid()}]
    });
  };

  removeBook = (id: string) => {
    this.setState({
      ...this.state,
      books: this.state.books.filter(book => {
        return book.id !== id
      })
    })
  };

  render() {
    return (
      <BookContext.Provider value={{...this.state, addBook: this.addBook, removeBook: this.removeBook}}>
        {this.props.children}
      </BookContext.Provider>
    );
  };
}
