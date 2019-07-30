import * as React from 'react';

type Props = {

};
type State = {

};

export class BookList extends React.Component<Props, State> {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The Way of Kings</li>
          <li>The Name of the Wind</li>
          <li>The Final Empire</li>
        </ul>
      </div>
    );
  };
}
