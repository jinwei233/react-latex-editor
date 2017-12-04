import React, { Component } from 'react';

import './TexMenuItem.scss';

class TexMenuItem extends Component {
  onClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.props.onClick(e);
  }
  render() {
    const svg = require(`../icons/${this.props.icon}.svg`);
    return (
      <a
        href="javascript:void(0);"
        title={this.props.title}
        className="tex-menu-item"
        onClick={this.onClick}
        dangerouslySetInnerHTML={{ __html: svg }}
      >
      </a>
    );
  }
}

export default TexMenuItem;
