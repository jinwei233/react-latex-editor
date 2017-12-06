import React, { Component } from 'react';
import { imgTexSrc } from '../util';

import './index.scss';

class Table extends Component {
  render() {
    const {
      props: {
        rows = [],
      },
    } = this;
    return (
      <div className="demo-table">
        {
          !!this.props.title && (<h2>{this.props.title}</h2>)
        }
        <table>
          <tbody>
            {
              rows.map((row) => {
                const items = row.items;
                return (
                  <tr key={row.key}>
                    {
                      items.map((item, index) => {
                        const key = [item, index].join(',');
                        if (item !== '-') {
                          return (
                            <td key={key}>
                              <img onClick={this.props.onClickItem} alt={item} src={imgTexSrc(item)} />
                            </td>
                          );
                        }
                        return (
                          <td key={key}>-</td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
