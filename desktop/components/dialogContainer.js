import React from 'react';

import PushConflictDialog from './pushConflictDialog';
import WaitingDialog from './waitingDialog';

class DialogContainer extends React.Component {
  render() {
    var dialog_type = this.props.store.getState().state.dialog_type;
    console.log(`Dialog Type: ${dialog_type}`);
    if (dialog_type == 'push-conflict') {
      return (
        <PushConflictDialog
          store={this.props.store}
          open={this.props.open}
          close={() => this.props.close()}
        />
      );  
    } else if (dialog_type == 'pull-wait') {
      return (
        <WaitingDialog
          store={this.props.store}
          open={this.props.open}
          close={() => this.props.close()}
          wait_type="pull"
        />
      );  
    } else if (dialog_type == 'push-wait') {
      return (
        <WaitingDialog
          store={this.props.store}
          open={this.props.open}
          close={() => this.props.close()}
          wait_type="push"
        />
      );  
    } else {
      return null;
    }
  }
}

export default DialogContainer;