import React from 'react';
import TextField from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MenuButton extends React.Component {
  render() {
    return (
      <div className="menu-button">
        <RaisedButton label={this.props.label} onClick={() => this.props.onClick()}/>
      </div>
    );
  }
}

export default MenuButton;