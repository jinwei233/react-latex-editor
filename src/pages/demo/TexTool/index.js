import { Quill } from 'react-quill';
import hotkeys from 'hotkeys-js';

import { imgTexSrc, isLatexSrc, text2tex } from '../util';

import './index.scss';

const Module = Quill.import('core/module');
const Embed = Quill.import('blots/embed');

class LatexBot extends Embed {
}

LatexBot.blotName = 'latex';
LatexBot.className = 'ql-latex'; //
LatexBot.tagName = 'IMG';

function setEditorSelection(editor, range) {
  if (range) {
    const length = editor.getLength();
    range.index = Math.max(0, Math.min(range.index, length - 1));
    range.length = Math.max(0, Math.min(range.length, (length - 1) - range.index));
  }
  editor.setSelection(range);
}

function setEditorContents(editor, value, sel = false) {
  if (typeof value === 'string') {
    editor.clipboard.dangerouslyPasteHTML(value);
  } else {
    editor.setContents(value);
  }
  if (sel) {
    setEditorSelection(editor, sel);
  }
}

class TexTool extends Module {
  static register() {
    Quill.register(LatexBot, true);
  }
  constructor(quil, options) {
    super(quil, options);

    quil.root.addEventListener('dblclick', (e) => {
      const { target } = e;
      const isImage = target.tagName.toUpperCase() === 'IMG';
      if (isImage) {
        const src = target.getAttribute('src');
        if (isLatexSrc(src)) {
          const latex = target.getAttribute('alt');
          if (latex) {
            options.onClickLatexImage(latex);
          }
        }
      }
    });
    // 批量转换
    hotkeys('ctrl+shift+4', () => {
      const sel = quil.getSelection();
      const content = quil.root.innerHTML;
      const ast = text2tex(content);
      const HTML = ast.map((item) => {
        if (item.type === 'text') {
          return item.data;
        } else if (item.type === 'math') {
          const src = imgTexSrc(item.data);
          return `<img src="${src}" alt="${item.data}" />`;
        }
      }).join('');
      setEditorContents(quil, HTML, sel);
    });
  }
}

export default TexTool;
