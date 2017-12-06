import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';

import Delta from 'quill-delta';

import 'react-quill/dist/quill.snow.css'; // ES6

import TexTool from './TexTool';
import TexModal from './TexModal';

import { imgTexSrc } from './util';

import './Editor.scss';

Quill.register('modules/latex', TexTool);

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texModalOpen: false,
      latexSelected: props.latexSelected || '',
      text: '',
    };
    const toolbar = {
      container: [
        ['bold', 'italic', 'underline', 'latex'], // toggled buttons
      ],
      handlers: {
        image: this.imageHandler,
      },
    };

    this.moduleConfig = {
      latex: {
        foo: 'bar',
        onClickLatexImage: (latex) => {
          this.setState({
            texModalOpen: true,
            latexSelected: latex,
          });
        },
      },
      toolbar,
    };
  }
  componentDidMount() {
    const editor = this.quillRef.getEditor();
    if (editor) {
      // 禁用拼写检查
      editor.root.spellcheck = false;
      const toolbar = editor.getModule('toolbar');
      toolbar.addHandler('latex', () => {
        this.toggleTexModalOpen();
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.latexSelected !== this.state.latexSelected) {
      this.setState({
        texModalOpen: true,
        latexSelected: nextProps.latexSelected,
      });
    }
  }
  refEditor = (el) => {
    this.quillRef = el;
  }
  toggleTexModalOpen = () => {
    this.setState({
      texModalOpen: !this.state.texModalOpen,
      latexSelected: !this.state.texModalOpen === false ? '' : this.state.latexSelected,
    });
  }
  imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        // eslint-disable-next-line
        console.info('upload to implement!');
      } else {
        // eslint-disable-next-line
        console.warn('You could only upload images.');
      }
    };
  }
  handleChange = (value) => {
    this.setState({ text: value });
  }
  onSelectTexCode = (latex) => {
    const editor = this.quillRef.getEditor();
    if (editor) {
      editor.focus();
      const selection = editor.getSelection();
      const src = imgTexSrc(latex);
      // editor.insertEmbed(selection.index, 'image', src, { alt: latex, 'is-latex': '1' });
      const delta = new Delta().retain(selection.index)
                               .insert({
                                 image: src,
                               }, {
                                 alt: latex,
                               });
      editor.updateContents(delta);
      editor.setSelection(selection.index + 1, 1, 'user');
      this.toggleTexModalOpen();
    }
  }
  render() {
    return (
      <div>
        <ReactQuill
          ref={this.refEditor}
          modules={this.moduleConfig}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <TexModal
          latex={this.state.latexSelected}
          open={this.state.texModalOpen}
          onClose={this.toggleTexModalOpen}
          onConfirm={this.onSelectTexCode}
        />
      </div>
    );
  }
}

export default Editor;
