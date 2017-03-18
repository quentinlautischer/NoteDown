import React from 'react';
import TextField from 'react';
import DialogFolderCreate from './dialogFolderCreate'
import { connect } from 'react-redux';

class FolderContainerView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createFolderDialogOpen: false
    }

    this.folderid = "0";
    this.selectFolder = this.selectFolder.bind(this);
    this.renderFolder = this.renderFolder.bind(this)
  }

  openCreateFolderDialog() {
    console.log("Opening Create Folder Dialog");
    this.setState({createFolderDialogOpen: true,});
  }

  createNewFolder(name) {
    console.log(`Creating New Folder with name: ${name}`);
    this.props.createFolder(name);
    this.closeCreateFolderDialog();
  }

  closeCreateFolderDialog() {
    console.log("Closing Create Folder Dialog");
    this.setState({createFolderDialogOpen: false,});
  }

  selectFolder(id, e) {
    console.log("Selected Folder: " + id);
    this.props.openFolder(id);
  }

  deleteFolder(id, e) {
    console.log("Deleting Folder: " + id);
    this.props.deleteFolder(id);
  }

  renderFolder({name, _id}) {
    return (
      <div key={_id} className="folder-view" onClick={this.selectFolder.bind(this, _id)}>
        {name}
        <div className="folder-delete-btn" onClick={this.deleteFolder.bind(this, _id)}>X</div>
      </div>
    );
  }

  render() {
    return (
      <div className="folder-container-view">
        {this.props.folders.map(this.renderFolder, this)}
        <div className="folder-view" onClick={() => this.openCreateFolderDialog()}>New +</div>
        <DialogFolderCreate 
          open={this.state.createFolderDialogOpen} 
          close={() => this.closeCreateFolderDialog()}
          createFolder={(name) => this.createNewFolder(name)}
        />
      </div>
    );
  }
}

export default connect()(FolderContainerView);