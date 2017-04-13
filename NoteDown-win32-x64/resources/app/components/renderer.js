import React from 'react';
import TextField from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Renderer extends React.Component {
  render() {
    return (
      <div className="quickmode">
        <RaisedButton label="QuickMode" onClick={() => this.props.onClick()}/>
      </div>
    );
  }
}

export default Renderer;