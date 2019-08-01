import uuid from "uuid";
import {Book} from "../contexts/BookContext";

export const BookReducer = (state: any, action: any) => {
  console.log("IN THE REDUCER", state, action);
  switch (action.type) {
    case "ADD_BOOK":
      const newState = {
        ...state,
        books: [...state.books, {title: action.book.title, author: action.book.author, id: uuid()}]
      };
      console.log("NEW STATE:", newState);
      return newState;
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book: {id: string}) => {
          return book.id !== action.id
        })
      };
    default:
      return state;
  }
};
