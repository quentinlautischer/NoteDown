import React from 'react';
import TextField from 'material-ui/TextField';

class MenuTextField extends React.Component {
  render() {
    return (
      <div className="menu-text-field">
        <TextField  hintStyle={{ textAlign: 'center' }} className="menu-text-field" hintText={this.props.hintText}/>
      </div>
    );
  }
}

export default MenuTextField;