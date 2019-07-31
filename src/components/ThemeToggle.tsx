import * as React from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {useContext} from "react";

export const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
};
