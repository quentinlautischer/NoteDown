import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuTextField from './menuTextField';
import MenuButton from './menuButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var ipc = require('electron').ipcRenderer;

class PushConflictDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  request_pull_data() {
    console.log("requesting data pull");
    const data = {userid: this.props.store.getState().state.userid};
    ipc.send('request-pull-data', data);
    store.dispatch({type: 'DIALOG_OPEN', dialog_type: 'pull-wait'});
  }

  request_push_data(force = false) {
    console.log("requesting data push");
    const data = {userid: this.props.store.getState().state.userid, notes: this.props.store.getState().notes, force_push: force};
    ipc.send('request-push-data', data);
    store.dispatch({type: 'DIALOG_OPEN', dialog_type: 'push-wait'});
  }

  overwritePull(){
    this.request_pull_data();
    this.props.close()
  }

  forcePush(){
    this.request_push_data(true);
    this.props.close()
  }

  render() {
    const actions = [
      <FlatButton
        label="Overwrite Pull"
        primary={false}
        keyboardFocused={false}
        onTouchTap={() => this.overwritePull()}
      />,
      <FlatButton
        label="Force Push"
        primary={true}
        keyboardFocused={false}
        onTouchTap={() => this.forcePush()}
      />
    ];

    return (
      <MuiThemeProvider>
        <div  className="dialog">
          <Dialog
            title="Push Conflict"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={() => this.props.close()}
          >
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default PushConflictDialog;