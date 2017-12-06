import React, { Component } from 'react';
import { imgTexSrc } from '../util';

import './index.scss';

class Table extends Component {
  render() {
    const items = this.props.items || ['a^2+b^2'];
    return (
      <div className="demo-table">
        <h2>化学</h2>
        <table>
          <tbody>
            <tr>
              {
                items.map((item) => {
                  return (
                    <td key={item}>
                      <img onClick={this.props.onClickItem} alt={item} src={imgTexSrc(item)} />
                    </td>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
