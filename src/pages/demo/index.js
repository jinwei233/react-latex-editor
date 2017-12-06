import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor';
import Table from './Table';

import './index.scss';

class Demo extends Component {
  componentDidMount() {
    console.log('mounted');
  }
  onClickItem = (e) => {
    const img = e.currentTarget;
    const latex = img.getAttribute('alt');
    console.log(latex);
  }
  render() {
    return (
      <div className="editor-cont">
        <h1 className="editor-demo-title">带公式编辑能力的富文本编辑器</h1>
        <Editor />
        <Table onClickItem={this.onClickItem} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#app'));
