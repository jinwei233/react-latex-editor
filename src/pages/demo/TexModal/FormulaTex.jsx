import React, { Component } from 'react';

class FormulaTex extends Component {
  onClick = () => {
    this.props.onClick(this.props.item);
  }
  render() {
    const { item } = this.props;
    // eslint-disable-next-line
    const svg = require(`../icons/${item.name}.svg`);
    return (
      <a
        href="javascript:void(0);"
        className="tex-menu-item-f"
        onClick={this.onClick}
        title={item.title}
        style={this.props.style}
        dangerouslySetInnerHTML={{ __html: svg }}
      >
      </a>
    );
  }
}

export default FormulaTex;
