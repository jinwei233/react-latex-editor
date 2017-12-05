import React, { Component } from 'react';

import './index.scss';

class Table extends Component {
  render() {
    return (
      <div className="demo-table">
        <h2>化学</h2>
        <table>
          <tbody>
            <tr>
              <td>a^2+b^2</td>
              <td>a^2+b^2</td>
              <td>a^2+b^2</td>
              <td>a^2+b^2</td>
              <td>a^2+b^2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
