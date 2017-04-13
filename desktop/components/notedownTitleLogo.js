/*
Relevant requirements: None
*/


import React from 'react';
import TextField from 'react';

class NoteDownTitleLogo extends React.Component {
  render() {
    return (
      <div className="notedown-title-logo">
        <h1>NoteDown <span><i className="icon-tree left-half" aria-hidden="true"></i><i className="icon-tree right-half" aria-hidden="true"></i></span></h1>
      </div>
    );
  }
}

export default NoteDownTitleLogo;