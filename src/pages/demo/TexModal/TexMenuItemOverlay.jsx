import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';

import TexMenuItem from './TexMenuItem';
import Overlay from '../Overlay';
import FormulaTex from './FormulaTex';

// eslint-disable-next-line
const renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;

const OVERLAY_CONTAINER_ID = 'tex-menu-item-cont';
let $currentMenuItem = null;

function wrap(Item) {
  return class extends Component {
    node = null; // 渲染 overlay 的容器节点
    componentWillUnmount() {
      this.unmountOverlay();
    }
    renderOverlay(node) {
      if (this.$menuItem) {
        // eslint-disable-next-line
        const el = ReactDOM.findDOMNode(this.$menuItem);
        if (!node) {
          node = document.createElement('div');
          node.setAttribute('id', OVERLAY_CONTAINER_ID);
          document.body.appendChild(node);
        }
        renderSubtreeIntoContainer(
          this, (
            <Overlay
              style={this.props.style}
              target={el}
              renderBody={this.renderOverlayBody}
            />
          ), node
        );
        document.addEventListener('click', this.closeOverlay, false);
      }
    }
    renderOverlayBody = () => {
      return (
        <div>
          {
            this.props.items.map((item) => {
              return (
                <FormulaTex style={this.props.itemStyle} key={item.name} item={item} onClick={this.onClickOverlayItem} />
              );
            })
          }
        </div>
      );
    }
    refTexMenuItem = (el) => {
      this.$menuItem = el;
    }
    onClickItem = () => {
      const node = document.getElementById(OVERLAY_CONTAINER_ID);
      const isRendered = node && node.children.length > 0;
      if (!isRendered || $currentMenuItem !== this.$menuItem) {
        this.renderOverlay(node);
      } else {
        this.closeOverlay(node);
      }
      // 切换当前 item
      $currentMenuItem = this.$menuItem;
    }
    onClickOverlayItem = (item) => {
      if (this.props.onClick) {
        this.closeOverlay();
        this.props.onClick(item);
      }
    }
    closeOverlay = () => {
      document.removeEventListener('click', this.closeOverlay);
      this.unmountOverlay();
    }
    unmountOverlay() {
      const node = document.getElementById(OVERLAY_CONTAINER_ID);
      if (node) {
        ReactDOM.unmountComponentAtNode(node);
      }
    }
    render() {
      return <Item {...this.props} ref={this.refTexMenuItem} onClick={this.onClickItem} />;
    }
  };
}

const TexMenuItemOverlay = wrap(TexMenuItem);

export default TexMenuItemOverlay;
