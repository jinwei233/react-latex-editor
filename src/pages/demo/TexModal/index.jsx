import React, { Component } from 'react';
import Modal from 'react-modal';

import Icon from 'components/Icon';
import Button from 'components/Button';

import TexMenuItems from './TexMenuItems';
import { imgTexSrc } from '../util';
import TexEditor from './TexEditor';

import './index.scss';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.65)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #eee',
    boxShadow: '0 5px 20px 0 rgba(0,34,77,.5)',
  },
};

class TexModal extends Component {
  constructor(props) {
    super(props);
    const { latex = '' } = props;
    this.state = {
      tex: latex,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.latex !== this.props.tex) {
      this.setState({
        tex: nextProps.latex,
      });
    }
  }
  onSelectTex = (item) => {
    this.setState({ tex: item.latex });
  }
  onTexChange = (val) => {
    this.setState({ tex: val });
  }
  onCancel = (e) => {
    this.props.onClose(e);
  }
  onConfirm = () => {
    this.props.onConfirm(this.state.tex);
  }
  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onRequestClose={this.onCancel}
        style={modalStyle}
      >
        <button title="关闭" className="latex-dlg-close-icon" onClick={this.props.onClose}>
          <Icon name="X" />
        </button>
        <div className="latex-dlg-main">
          <div className="latex-dlg-main-editor">
            <TexMenuItems onSelect={this.onSelectTex} />
            <TexEditor defaultValue={this.state.tex} insertValue={this.state.tex} onChange={this.onTexChange} />
          </div>
          <div className="latex-dlg-main-preview"><img alt={this.state.tex} src={imgTexSrc(this.state.tex)} /></div>
          <div className="latex-dlg-foot">
            <Button className="ui-btn outline" onClick={this.onCancel}>取消</Button>
            <Button className="ui-btn" onClick={this.onConfirm}>确定</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TexModal;
