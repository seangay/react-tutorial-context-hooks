import * as React from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

type Props = {};

type State = {}

export class Navbar extends React.Component<Props, State> {
  render() {
    return (
      <ThemeContext.Consumer>{(context: any) => {
        const {isLightTheme, light, dark} = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}
      </ThemeContext.Consumer>
    );
  };
}
