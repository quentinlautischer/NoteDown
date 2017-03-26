import React from 'react';
import TextField from 'react';
import DialogFolderCreate from './dialogFolderCreate'
import { connect } from 'react-redux';
var ipc = require('electron').ipcRenderer;

class FolderContainerView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      createFolderDialogOpen: false
    }

    this.folderid = "0";
    this.selectFolder = this.selectFolder.bind(this);
    this.renderFolder = this.renderFolder.bind(this);
    this.storeDidUpdate = this.storeDidUpdate.bind(this);

    this.unsubscribe = null;
  }


  componentDidMount(){
   this.unsubscribe = this.props.store.subscribe( this.storeDidUpdate );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
  }

  findIndexOfFolder(folderid) {
    const folders = this.props.store.getState().notes.folders;
    const length = folders.length;
    var i;
    for(i = 0; i < length; i++) {
      if (folders[i]._id == folderid)
        return i;
    }
    return null;
  }

  openCreateFolderDialog() {
    console.log("Opening Create Folder Dialog");
    this.setState({createFolderDialogOpen: true,});
  }

  createNewFolder(name) {
    console.log(`Creating New Folder with name: ${name}`);
    const data = {name: name};
    ipc.send('create-folder-request', data);
    this.closeCreateFolderDialog();
  }

  closeCreateFolderDialog() {
    console.log("Closing Create Folder Dialog");
    this.setState({createFolderDialogOpen: false,});
  }

  selectFolder(id, e) {
    console.log("Selected Folder: " + id);
    var index = this.findIndexOfFolder(id);
    this.props.store.dispatch({type: 'SELECT_FOLDER', index: index});
    this.props.store.dispatch({type: 'EDITOR_MODE'});
  }

  deleteFolder(id, e) {
    console.log("Deleting Folder: " + id);
    var index = this.findIndexOfFolder(id);
    store.dispatch({type: 'DELETE_FOLDER', index: index});
  }

  // <div className="folder-delete-btn" onClick={this.deleteFolder.bind(this, _id)}>X</div>
  renderFolder({name, _id}) {
    return (
      <div key={_id} className="folder-view" onClick={this.selectFolder.bind(this, _id)}>
        {name}
       
      </div>
    );
  }

  render() {
    console.log("FolderviewContainer Rendering!!!!!");
    return (
      <div className="folder-container-view">
        {this.props.store.getState().notes.folders.map(this.renderFolder, this)}
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