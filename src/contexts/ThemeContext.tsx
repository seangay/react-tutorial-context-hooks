import React, {createContext} from "react";

export const ThemeContext = createContext({});

type Props = {};

type State = {
  isLightTheme: boolean
  light: any
  dark: any
};

export class ThemeContextProvider extends React.Component<Props, State> {
  state: Readonly<State> = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555"
    }
  };

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  };
}
