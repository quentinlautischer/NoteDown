import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

class Waiter extends Dialog {
  render() {
    return (
      <div className="waiter-dialog">
        <Dialog 
            open={this.props.open}
            style={{width: 120, align: 'center'}}>
          <div className='waiter'>
            <CircularProgress
              open={this.props.open}
            />
          </div>
        </Dialog>
      </div>
      
    );
  }
}

export default Waiter;