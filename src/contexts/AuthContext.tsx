import React, {createContext} from "react";

export const AuthContext = createContext({});

type Props = {};

type State = {
  isAuthenticated: boolean;
};

export class AuthContextProvider extends React.Component<Props, State> {
  state: Readonly<State> = {
    isAuthenticated: true
  };

  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{...this.state, toggleAuth: this.toggleAuth}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
}
