import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>Detailed Images</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('detailed-images'));