import React from 'react';
import TextField from 'react';

class FolderContainerView extends React.Component {
  constructor(props) {
    super(props);
    this.folderid = "0";

    this.selectFolder = this.selectFolder.bind(this);
    this.renderFolder = this.renderFolder.bind(this)
  }

  selectFolder(id, e) {
    console.log("Selected Folder: " + id);
    this.props.openFolder(id);
  }

  renderFolder({name, _id}) {
    return (
      <div key={_id} className="folder-view" onClick={this.selectFolder.bind(this, _id)}>
        {name}
      </div>
    );
  }

  render() {
    return (
      <div className="folder-container-view">
        {this.props.notes.folders.map(this.renderFolder, this)}
        <div className="folder-view" onClick={() => this.props.newFolder()}>New +</div>
      </div>
    );
  }






  
}

export default FolderContainerView;