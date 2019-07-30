import * as React from 'react';

type Props = {

};

type State = {}

export class Navbar extends React.Component<Props, State> {
  render() {
    return (
      <nav>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
}
