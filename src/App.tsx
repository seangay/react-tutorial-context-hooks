import React from 'react';
import {Navbar} from "./components/Navbar";
import {BookList} from "./components/BookList";
import {ThemeContextProvider} from "./contexts/ThemeContext";
import {ThemeToggle} from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
