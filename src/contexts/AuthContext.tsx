import React, {createContext} from "react";

type Props = {};

type State = {
  isAuthenticated: boolean;
  toggleAuth?: () => void;
};

const initialState = {
  isAuthenticated: true
};

export const AuthContext = createContext<State>(initialState);


export class AuthContextProvider extends React.Component<Props, State> {
  state: Readonly<State> = initialState;

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
