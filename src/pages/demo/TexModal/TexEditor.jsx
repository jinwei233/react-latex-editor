import React, { Component } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/stex/stex';

import 'codemirror/lib/codemirror.css';

class TexEditor extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.isFocus = false;
  }
  shouldComponentUpdate(nextProps) {
    if (!this.isFocus) {
      const editor = this.editor.codeMirror;
      if (editor) {
        editor.focus();
        const doc = editor.getDoc();
        const cursor = doc.getCursor();
        const pos = {
          line: cursor.line,
          ch: cursor.ch,
        };
        setTimeout(() => {
          doc.replaceRange(nextProps.insertValue, pos);
        }, 0);
      }
    }
    return false;
  }
  refEditor = (el) => {
    this.editor = el;
  }
  onChange = (e) => {
    this.props.onChange(e);
  }
  onFocusChange = (b) => {
    this.isFocus = b;
  }
  render() {
    const options = {
      lineNumbers: false,
    };
    return (
      <CodeMirror
        ref={this.refEditor}
        value={this.props.defaultValue}
        onChange={this.onChange}
        onFocusChange={this.onFocusChange}
        options={options}
      />
    );
  }
}

export default TexEditor;
