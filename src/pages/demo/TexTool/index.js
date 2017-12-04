import { Quill } from 'react-quill';

import { isLatexSrc } from '../util';

import './index.scss';

const Module = Quill.import('core/module');
const Embed = Quill.import('blots/embed');

class LatexBot extends Embed {
  static create(value) {
    const node = super.create(value);
    if (typeof value === 'string') {
      const src = `https://latex.codecogs.com/gif.latex?${encodeURIComponent(value)}`;
      node.setAttribute('src', src);
    }
    return node;
  }
  static value(domNode) {
    return domNode.getAttribute('alt');
  }
}

LatexBot.blotName = 'latex';
LatexBot.className = 'ql-latex'; //
LatexBot.tagName = 'IMG';

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
  }
}

export default TexTool;
