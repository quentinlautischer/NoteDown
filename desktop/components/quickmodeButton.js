import React from 'react';
import TextField from 'react';
import MenuButton from './menuButton';

class QuickmodeButton extends MenuButton {
  render() {
    return (
      <div className="quickmode-btn">
        <MenuButton label="QuickMode" onClick={() => this.props.onClick()}/>
      </div>
    );
  }
}

export default QuickmodeButton;