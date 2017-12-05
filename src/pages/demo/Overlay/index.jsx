import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

function getOverlayStyle(component, target) {
  const rect1 = target.getClientRects()[0];
  const rect2 = component.getClientRects()[0];
  return {
    overlayStyle: {
      // eslint-disable-next-line
      left: rect1.left - (rect2.width / 2) + (rect1.width / 2),
      top: rect1.top - rect2.height - 10, // a little more top
    },
    arrowStyle: {
      left: rect2.width / 2,
      top: rect2.height + 7,
    },
  };
}

class Overlay extends Component {
  state = {
    overlayStyle: {
      visibility: 'hidden',
    },
    arrowStyle: null,
  }
  componentDidMount() {
    this.updateStyle(this.props);
    window.addEventListener('resize', this.updatePosition, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePosition);
  }
  componentWillReceiveProps(nextProps) {
    this.flag = true;
    this.updateStyle(nextProps, { visibility: 'hidden' });
  }
  componentDidUpdate() {
    if (this.flag === true) {
      this.flag = false;
      this.updateStyle(this.props);
    }
  }
  refCont = (el) => {
    this.$cont = el;
  }
  updateStyle(props, { visibility = 'visible' } = {} ) {
    const { target } = props;
    // eslint-disable-next-line
    const component = ReactDOM.findDOMNode(this);
    const { overlayStyle, arrowStyle } = getOverlayStyle(component, target);
    this.setState({
      overlayStyle: { ...overlayStyle, visibility },
      arrowStyle,
    });
  }
  updatePosition = (e) => {
    this.updateStyle(this.props);
  }
  onClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  }
  render() {
    const { target } = this.props;
    if (!target) {
      return null;
    }
    const style = {
      ...this.state.overlayStyle,
      ...this.props.style,
    };
    return (
      <div ref={this.refCont} className="tex-modal-overlay" style={style} onClick={this.onClick}>
        {this.props.renderBody()}
        <span className="tex-modal-arrow-down" style={this.state.arrowStyle} />
      </div>
    );
  }
}

export default Overlay;
