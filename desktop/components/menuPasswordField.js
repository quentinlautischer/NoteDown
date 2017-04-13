/*
Relevant requirements:
- FU-10: Desktop: User: Authentication
*/


import React from 'react';

import TextField from 'material-ui/TextField';

class MenuPasswordField extends TextField {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="menu-text-field">
        <TextField
          ref='password'
          type="password"
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

export default MenuPasswordField;