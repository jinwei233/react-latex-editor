import React, { Component } from 'react';

import TexMenuItemOverlay from './TexMenuItemOverlay';

class TexMenuItems extends Component {
  onClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  }
  onClickItem = (item) => {
    this.props.onSelect(item);
  }
  render() {
    const items = [
      {
        title: '希腊字幕',
        icon: '001',
        items: [
          { name: '006', latex: '\\alpha', title: '\\alpha' },
          { name: '007', latex: '\\beta', title: '\\beta' },
          { name: '008', latex: '\\gamma', title: '\\gamma' },
          { name: '009', latex: '\\delta', title: '\\delta' },
          { name: '010', latex: '\\epsilon', title: '\\epsilon' },
          { name: '011', latex: '\\varepsilon', title: '\\varepsilon' },
          { name: '012', latex: '\\zeta', title: '\\zeta' },
          { name: '013', latex: '\\eta', title: '\\eta' },
          { name: '014', latex: '\\theta', title: '\\theta' },
          { name: '015', latex: '\\vartheta', title: '\\vartheta' },
          { name: '016', latex: '\\iota', title: '\\iota' },
          { name: '017', latex: '\\kappa', title: '\\kappa' },
          { name: '018', latex: '\\lambda', title: '\\lambda' },
          { name: '019', latex: '\\mu', title: '\\mu' },
          { name: '020', latex: '\\nu', title: '\\nu' },
          { name: '021', latex: '\\xi', title: '\\xi' },
          { name: '022', latex: 'o', title: 'o' },
          { name: '023', latex: '\\pi', title: '\\pi' },
          { name: '024', latex: '\\rho', title: '\\rho' },
          { name: '025', latex: '\\varrho', title: '\\varrho' },
          { name: '026', latex: '\\sigma', title: '\\sigma' },
          { name: '027', latex: '\\tau', title: '\\tau' },
          { name: '028', latex: '\\upsilon', title: '\\upsilon' },
          { name: '029', latex: '\\phi', title: '\\phi' },
          { name: '030', latex: '\\varphi', title: '\\varphi' },
          { name: '031', latex: '\\chi', title: '\\chi' },
          { name: '032', latex: '\\psi', title: '\\psi' },
          { name: '033', latex: '\\omega', title: '\\omega' },
        ],
        overlay: {
          style: {
            width: 400,
          },
        },
      }, {
        title: '运算符号',
        icon: '002',
        items: [
          { name: '034', latex: '\\times', title: '\\times' },
          { name: '035', latex: '\\div', title: '\\div' },
          { name: '036', latex: '\\cdot', title: '\\cdot' },
          { name: '037', latex: '\\pm', title: '\\pm' },
          { name: '038', latex: '\\mp', title: '\\mp' },
          { name: '039', latex: '\\ast', title: '\\ast' },
          { name: '040', latex: '\\star', title: '\\star' },
          { name: '041', latex: '\\star', title: '\\star' },
          { name: '042', latex: '\\circ', title: '\\circ' },
          { name: '043', latex: '\\bullet', title: '\\bullet' },
          { name: '044', latex: '\\oplus', title: '\\oplus' },
          { name: '045', latex: '\\ominus', title: '\\ominus' },
          { name: '046', latex: '\\oslash', title: '\\oslash' },
          { name: '047', latex: '\\otimes', title: '\\otimes' },
          { name: '048', latex: '\\odot', title: '\\odot' },
          { name: '049', latex: '\\dagger', title: '\\dagger' },
          { name: '050', latex: '\\ddagger', title: '\\ddagger' },
          { name: '051', latex: '\\vee', title: '\\vee' },
          { name: '052', latex: '\\wedge', title: '\\wedge' },
          { name: '053', latex: '\\cap', title: '\\cap' },
          { name: '054', latex: '\\cup', title: '\\cup' },
          { name: '055', latex: '\\aleph', title: '\\aleph' },
          { name: '056', latex: '\\Re', title: '\\Re' },
          { name: '057', latex: '\\Im', title: '\\Im' },
          { name: '058', latex: '\\top', title: '\\top' },
          { name: '059', latex: '\\bot', title: '\\bot' },
          { name: '060', latex: '\\infty', title: '\\infty' },
          { name: '061', latex: '\\partial', title: '\\partial' },
          { name: '062', latex: '\\forall', title: '\\forall' },
          { name: '063', latex: '\\exists', title: '\\exists' },
          { name: '064', latex: '\\neg', title: '\\neg' },
          { name: '065', latex: '\\angle', title: '\\angle' },
          { name: '066', latex: '\\triangle', title: '\\triangle' },
          { name: '067', latex: '\\diamond', title: '\\diamond' },
        ],
        overlay: {
          style: {},
        },
      }, {
        title: '集合符号',
        icon: '003',
        items: [
          { name: '068', latex: '\\leq', title: '\\leq' },
          { name: '069', latex: '\\geq', title: '\\geq' },
          { name: '070', latex: '\\prec', title: '\\prec' },
          { name: '071', latex: '\\succ', title: '\\succ' },
          { name: '072', latex: '\\preceq', title: '\\preceq' },
          { name: '073', latex: '\\succeq', title: '\\succeq' },
          { name: '074', latex: '\\ll', title: '\\ll' },
          { name: '075', latex: '\\gg', title: '\\gg' },
          { name: '076', latex: '\\equiv', title: '\\equiv' },
          { name: '077', latex: '\\sim', title: '\\sim' },
          { name: '078', latex: '\\simeq', title: '\\simeq' },
          { name: '079', latex: '\\asymp', title: '\\asymp' },
          { name: '080', latex: '\\approx', title: '\\approx' },
          { name: '081', latex: '\\ne', title: '\\ne' },
          { name: '082', latex: '\\subset', title: '\\subset' },
          { name: '083', latex: '\\supset', title: '\\supset' },
          { name: '084', latex: '\\subseteq', title: '\\subseteq' },
          { name: '085', latex: '\\supseteq', title: '\\supseteq' },
          { name: '086', latex: '\\in', title: '\\in' },
          { name: '087', latex: '\\ni', title: '\\ni' },
          { name: '088', latex: '\\notin', title: '\\notin' },
        ],
        overlay: {
          style: {},
        },
      }, {
        title: '分式积分',
        icon: '004',
        items: [
          { name: '089', latex: 'x_{a}', title: 'x_{a}' },
          { name: '090', latex: 'x^{b}', title: 'x^{b}' },
          { name: '091', latex: 'x_{a}^{b}', title: 'x_{a}^{b}' },
          { name: '092', latex: '\\bar{x}', title: '\\bar{x}' },
          { name: '093', latex: '\\tilde{x}', title: '\\tilde{x}' },
          { name: '094', latex: '\\frac{a}{b}', title: '\\frac{a}{b}' },
          { name: '095', latex: '\\sqrt{x}', title: '\\sqrt{x}' },
          { name: '096', latex: '\\sqrt[n]{x}', title: '\\sqrt[n]{x}' },
          { name: '097', latex: '\\bigcap_{a}^{b}', title: '\\bigcap_{a}^{b}' },
          { name: '098', latex: '\\bigcup_{a}^{b}', title: '\\bigcup_{a}^{b}' },
          { name: '099', latex: '\\prod_{a}^{b}', title: '\\prod_{a}^{b}' },
          { name: '100', latex: '\\coprod_{a}^{b}', title: '\\coprod_{a}^{b}' },
          { name: '101', latex: '\\left( x \\right)', title: '\\left( x \\right)' },
          { name: '102', latex: '\\left[ x \\right]', title: '\\left[ x \\right]' },
          { name: '103', latex: '\\left\\{ x \\right\\}', title: '\\left\\{ x \\right\\}' },
          { name: '104', latex: '\\left| x \\right|', title: '\\left| x \\right|' },
          { name: '105', latex: '\\int_{a}^{b}', title: '\\int_{a}^{b}' },
          { name: '106', latex: '\\oint_{a}^{b}', title: '\\oint_{a}^{b}' },
          { name: '107', latex: '\\sum_{a}^{b}{x}', title: '\\sum_{a}^{b}{x}' },
          { name: '108', latex: '\\lim_{a \\rightarrow b}{x}', title: '\\lim_{a \\rightarrow b}{x}' },
        ],
        overlay: {
          style: {
            width: 500,
          },
        },
        item: {
          style: {
            height: 40,
            width: 70,
          },
        },
      }, {
        title: '箭头符号',
        icon: '005',
        items: [
          { name: '109', latex: '\\leftarrow', title: '\\leftarrow' },
          { name: '110', latex: '\\rightarrow', title: '\\rightarrow' },
          { name: '111', latex: '\\leftrightarrow', title: '\\leftrightarrow' },
          { name: '112', latex: '\\Leftarrow', title: '\\Leftarrow' },
          { name: '113', latex: '\\Rightarrow', title: '\\Rightarrow' },
          { name: '114', latex: '\\Leftrightarrow', title: '\\Leftrightarrow' },
          { name: '115', latex: '\\uparrow', title: '\\uparrow' },
          { name: '116', latex: '\\downarrow', title: '\\downarrow' },
          { name: '117', latex: '\\updownarrow', title: '\\updownarrow' },
          { name: '118', latex: '\\Uparrow', title: '\\Uparrow' },
          { name: '119', latex: '\\Downarrow', title: '\\Downarrow' },
          { name: '120', latex: '\\Updownarrow', title: '\\Updownarrow' },
        ],
        overlay: {
          style: {},
        },
      },
    ];
    return (
      <div className="tex-menu-items" onClick={this.onClick}>
        {
          items.map((item) => {
            const {
              item: {
                style: itemStyle = {},
              } = {},
            } = item;
            return (
              <TexMenuItemOverlay
                key={item.icon}
                icon={item.icon}
                title={item.title}
                items={item.items}
                style={item.overlay.style}
                itemStyle={itemStyle}
                onClick={this.onClickItem}
              />
            );
          })
        }
      </div>
    );
  }
}

export default TexMenuItems;
