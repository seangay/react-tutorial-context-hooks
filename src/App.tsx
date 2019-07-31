import React from 'react';
import {BookContextProvider} from "./contexts/BookContext";
import {Navbar} from "./components/Navbar";
import {BookList} from "./components/BookList";
import {BookForm} from "./components/BookForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
};

export default App;
