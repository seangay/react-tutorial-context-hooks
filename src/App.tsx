import React from 'react';
import {BookContextProvider} from "./contexts/BookContext";
import {Navbar} from "./components/Navbar";
import {BookList} from "./components/BookList";

const App: React.FC = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
      </BookContextProvider>
    </div>
  );
};

export default App;
