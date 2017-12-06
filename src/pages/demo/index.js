import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor';
import Table from './Table';
import { uuid } from './util';

import './index.scss';


const demos = [{
  title: '化学',
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
      '\\ce{CO2 + C ->T[above][below] 2CO}',
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
        <Editor latexSelected={this.state.latexSelected} />
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
