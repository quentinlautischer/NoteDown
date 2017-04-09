import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet,
    Alert
} from 'react-native';
import colors from '../app/constants';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';
import Toast from 'react-native-root-toast';

import NotesViewScene from './NotesViewScene'; // navigate
import FlashcardViewScene from './FlashcardViewScene';

class FoldersScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        };

        this.selectFolder = this.selectFolder.bind(this);
        this.storeDidUpdate = this.storeDidUpdate.bind(this);

        this.unsubscribe = null;
    }

    componentWillMount(){
        this.setRows();
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setRows() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ dataSource: ds.cloneWithRows(this.context.store.getState().notes.folders) });
    }

    _navigate() {
        this.context.store.dispatch({type: 'RENDER_MODE'});
        this.props.navigator.push({
            title: 'NotesViewScene',
            component: NotesViewScene,
            passProps: {
                socket: this.props.socket,
                initialContent: this.context.store.getState().notes.folders
            },
            onPress: this.onPress.bind(this),
            onBack: this.onBack.bind(this),
            rightIconName: 'cards',
            backIconName: 'arrow-left'
        });
        var folderIdx = this.context.store.getState().state.folderIndex;
        this.context.store.dispatch({type: 'UPDATE_PAGE_SAVED_CONTENT',
            content: this.context.store.getState().notes.folders[folderIdx].pages[0].content,
            folderIndex: this.context.store.getState().state.folderIndex,
            pageIndex: 0
        });
    }

    onPress() {
        var fcExist = this.updateStateForFCs();
        if (!fcExist) {
            let toast = Toast.show('No flashcards to show for this folder', {
                duration: 1400, // ms
                position: 0, // middle of screen
                shadow: true
            });
        } else { // at least 1 fc to show
            this.props.navigator.push({
                component: FlashcardViewScene,
                passProps: {
                    ...this.props,
                    currentIndex: this.context.store.getState().flashcards.currentIndex
                },
                onPress: this.onPressFlashcards.bind(this),
                rightIconName: 'refresh'
            });
            this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
        }
    }

    onPressFlashcards() {
        Alert.alert(
            'Reset Ranks',
            'Revert flashcard ranks to default for this folder?',
            [
                {text: 'Yes', onPress: () => {
                    this.context.store.dispatch({type: 'REVERT_RANKS'});
                    var state = this.context.store.getState().flashcards;
                    this.context.store.dispatch({type: 'SAVE_CARDS', flashcards: state.flashcards[state.flashcardFolderIndex]});
                    this.requestPushData();
                    this.props.navigator.pop();
                }},
                {text: 'No', onPress: () => {}},
            ],
            { cancelable: false }
        )
    }

    requestPushData() {
        var state = this.context.store.getState();
        const data = {userid: state.state.userid, notes: state.notes, force_push: false};
        this.props.socket.emit('request-push-data', data);
    }

    updateStateForFCs() {
        this.context.store.dispatch({type: 'MAP_FLASHCARD_FOLDER', notesFolder: this.context.store.getState().state.folderIndex});
        if (this.context.store.getState().flashcards.flashcardFolderIndex === -1) return false;

        this.context.store.dispatch({type: 'FIND_FIRST_FLASHCARD'});
        return true;
    }

    onBack() {
        this.props.navigator.pop();
        this.context.store.dispatch({type: 'FOLDER_MODE'});
        this.context.store.dispatch({type: 'SELECT_PAGE', index: 0});
    }

    storeDidUpdate(){
        this.setRows();
    }

    selectFolder(rowID) {
        var index = parseInt(rowID.replace('FOLDER', ''))
        this.context.store.dispatch({type: 'SELECT_FOLDER', index: index});
        this.context.store.dispatch({type: 'RENDER_MODE'});
        this._navigate();
    }

    render() {
        return (
            <LinearGradient colors={[colors.PRIMARY1, colors.PRIMARY1_GRADM, colors.PRIMARY1_GRADL]} style={styles.linearGradient}>
                <View>
                    <TitleText text='My Folders' />
                    <ListView
                        dataSource={this.state.dataSource}
                        enableEmptySections={true}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>
                            <TouchableHighlight onPress = { () => this.selectFolder(rowID) }>
                                <ListItem iconName='folder' text={rowData.name} />
                            </TouchableHighlight>
                        }
                    />
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    }
});

FoldersScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(FoldersScene);
