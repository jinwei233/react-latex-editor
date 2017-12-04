import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor';

import './index.scss';

class Demo extends Component {
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#app'));
