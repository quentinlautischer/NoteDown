import React from 'react';

import PushConflictDialog from './pushConflictDialog';

class DialogContainer extends React.Component {
  render() {
    if (this.props.store.getState().state.dialog_type == 'push-conflict') {
      return (
        <PushConflictDialog
          store={this.props.store}
          open={this.props.open}
          close={() => this.props.close()}
        />
      );  
    } else {
      return null;
    }
  }
}

export default DialogContainer;