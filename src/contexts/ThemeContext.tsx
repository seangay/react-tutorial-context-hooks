import React, {createContext} from "react";

type Props = {};

type State = {
  isLightTheme: boolean;
  light: any;
  dark: any;
  toggleTheme?: () => void;
};

const initialState: State = {
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

export const ThemeContext = createContext<State>(initialState);

export class ThemeContextProvider extends React.Component<Props, State> {
  state: Readonly<State> = initialState;

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  };
}
