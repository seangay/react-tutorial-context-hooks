import * as React from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

type Props = {};
type State = {};

export class ThemeToggle extends React.Component<Props, State> {
  // noinspection JSUnusedGlobalSymbols
  static contextType = ThemeContext;

  render() {
    const {toggleTheme} = this.context;
    return (
      <button onClick={toggleTheme}>Toggle Theme</button>
    );
  };
}
