import * as React from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from '../contexts/AuthContext';

type Props = {};

type State = {}

export class Navbar extends React.Component<Props, State> {
  render() {
    return (
      <AuthContext.Consumer>{(authContext: any) => (
        <ThemeContext.Consumer>{(themeContext: any) => {
          const {isAuthenticated, toggleAuth} = authContext;
          const {isLightTheme, light, dark} = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{background: theme.ui, color: theme.syntax}}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                {isAuthenticated ? "Logged IN" : "Logged OUT"}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  };
}
