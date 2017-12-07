import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor';
import Table from './Table';
import { uuid } from './util';
import editorValue from './initEditorValue';

import './index.scss';

const demos = [{
  title: '数学示例',
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      'a^2 + b^2 = c^2',
      '\\lim_{n \\to \\infty}\\sum_{k=1}^n \\frac{1}{k^2}= \\frac{\\pi^2}{6}',
      '\\forall x \\in \\mathbf{R}:x^{2} \\geq 0',
      'a^x+y \\neq a^{x+y}',
    ],
  }, {
    key: uuid.next(),
    items: [
      'n! = 1 \\cdot 2 \\cdots (n-1) \\cdot n',
      '0.\\overline{3} = \\underline{\\underline{1/3}}',
      '\\underbrace{\\overbrace{a+b+c}^6 \\cdot \\overbrace{d+e+f}^7} _\\text{meaning of life} = 42',
      '-',
    ],
  }, {
    key: uuid.next(),
    items: [
      'f(x) = x^2',
      'f’(x) = 2x',
      'f’’(x) = 2',
      '-',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '\\hat{XY}',
      '\\widehat{XY}',
      '\\bar{x_0}',
      '\\bar{x}_0',
      '\\vec{AB}',
      '\\overrightarrow{AB}',
      'x\\equiv a \\pmod{b}',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '3/8 \\quad \\frac{3}{8} \\quad \\tfrac{3}{8}',
      '\\binom{n}{k} =\\binom{n-1}{k} + \\binom{n-1}{k-1}',
      '\\sum^n_{\\substack{0<i<n \\\\ j\\subseteq i}} P(i,j) = Q(i,j)',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      `
\\begin{align}
a & = b + c \\\\
& = d + e
\\end{align}
`,
      `
a + b + c + d + e + f
+ g + h + i
\\\\
= j + k + l + m + n
`,
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      `
\\mathbf{X} = \\left(
\\begin{array}{ccc}
x_1 & x_2 & \\ldots \\\\
x_3 & x_4 & \\ldots \\\\
\\vdots & \\vdots & \\ddots
\\end{array} \\right)
`,
      `
|x| =
\\begin{cases}
-x & \\text{if } x < 0,\\\\
0 & \\text{if } x = 0,\\\\
x & \\text{if } x > 0.
\\end{cases}
`,
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      `\\begin{bmatrix}
p_{11} & p_{12} & \\ldots
& p_{1n} \\\\
p_{21} & p_{22} & \\ldots
& p_{2n} \\\\
\\vdots & \\vdots & \\ddots
& \\vdots \\\\
p_{m1} & p_{m2} & \\ldots
& p_{mn}
\\end{bmatrix}
`,
      '\\int_1^2 \\ln x \\,\\mathrm{d}x',
      '\\iint f(x)g(y) \\mathrm{d} x \\mathrm{d} y',
    ],
  }],
}, {
  title: '化学示例',
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '\\ce{H2O}',
      '\\ce{Sb2O3}',
      '\\ce{H+}',
      '\\ce{CrO4^2-}',
      '\\ce{AgCl2-}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{[AgCl2]-}',
      '\\ce{Y^{99}+}',
      '\\ce{H2_{(aq)}}',
      '\\ce{NO3-}',
      '\\ce{(NH4)2S}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{2H2O}',
      '\\ce{1/2H2O}',
      '\\ce{^{227}_{90}Th+}',
      '\\ce{KCr(SO4)2*12H2O}',
      '-',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{C6H5-CHO}',
      '\\ce{X=Y#Z}',
      '\\ce{A\\sbond B\\dbond C\\tbond D}',
      '\\ce{A\\bond{~}B\\bond{~-}C}',
      '\\ce{A\\bond{~=}B\\bond{~--}C\\bond{-~-}D}',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '\\ce{Fe(CN)_{$\\frac{6}{2}$}}',
      '\\ce{A\\bond{...}B\\bond{....}C}',
      '\\ce{A\\bond{->}B\\bond{<-}C}',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '\\ce{$x\\,$ Na(NH4)HPO4 ->[\\Delta](NaPO3)_{$x$} + $x\\,$ NH3 ^ + $x\\,$ H2O}',
    ],
  }],
}, {
  key: uuid.next(),
  rows: [{
    key: uuid.next(),
    items: [
      '\\ce{CO2 + C -> 2CO}',
      '\\ce{CO2 + C <- 2CO}',
      '\\ce{CO2 + C <=> 2CO}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{H+ + OH- <=> H2O}',
      'A \\leftrightarrow A\'',
      '\\ce{$A$ <-> $A’$}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{CO2 + C ->[\\alpha] 2CO}',
      '\\ce{CO2 + C ->[\\alpha][\\beta] 2CO}',
      '\\ce{CO2 + C ->[\\text{above}] 2CO}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{CO2 + C ->[\\text{above}][\\text{below}] 2CO}',
      '\\ce{CO2 + C ->T[above very long][below] 2CO}',
      '\\ce{$A$ ->[\\ce{+H2O}] $B$}',
    ],
  }, {
    key: uuid.next(),
    items: [
      '\\ce{$A$ ->C[+H2O] $B$}',
      '\\ce{SO4^2- + Ba^2+ -> BaSO4 v}',
      '-',
    ],
  }],
}];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latexSelected: '',
    };
  }
  onClickItem = (e) => {
    const img = e.currentTarget;
    const latex = img.getAttribute('alt');
    this.setState({
      latexSelected: latex,
    });
  }
  render() {
    return (
      <div className="editor-cont">
        <h1 className="editor-demo-title">带公式编辑能力的富文本编辑器</h1>
        <Editor latexSelected={this.state.latexSelected} value={editorValue} />
        <div>
          {
            demos.map((item) => {
              return (
                <Table key={item.key} title={item.title} rows={item.rows} onClickItem={this.onClickItem} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#app'));
