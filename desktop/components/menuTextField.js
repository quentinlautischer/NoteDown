import React from 'react';
import TextField from 'material-ui/TextField';

class MenuTextField extends TextField {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="menu-text-field">
        <TextField 
          hintStyle={{ textAlign: 'center' }} 
          className={this.props.className + " menu-text-field"}
          hintText={this.props.hintText}
          value={this.props.value} 
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default MenuTextField;