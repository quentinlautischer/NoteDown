/*
Relevant requirements: None
*/


import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class WaitingDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // <CircularProgress size={80} thickness={7} />
  render() {
    return (
      <MuiThemeProvider>
        <div  className="dialog">
          <Dialog
            style={{width: '240px'}}
            modal={true}
            open={this.props.open}
            onRequestClose={() => this.props.close()} 
          >
            <i className={`icon-cloud-${this.props.wait_type}`}></i>
            <i className="icon-spinning-cog"></i>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default WaitingDialog;