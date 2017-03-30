import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';
import Picker from 'react-native-picker';

import NotesViewScene from './NotesViewScene'; // navigate
import FlashcardViewScene from './FlashcardViewScene';

class FoldersScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            open: false
        };

        this.folderid = "0";
        this.selectFolder = this.selectFolder.bind(this);
        this.storeDidUpdate = this.storeDidUpdate.bind(this);

        this.unsubscribe = null;
    }

    componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ dataSource: ds.cloneWithRows(this.context.store.getState().notes.folders) });
    }

    _navigate(index) {
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
    }

    onPress() {
        Picker.hide();
        this.props.navigator.push({
            component: FlashcardViewScene,
            passProps: this.props
        })
    }

    onBack() {
        Picker.hide();
        this.props.navigator.pop();
    }

    storeDidUpdate(){
        this.setState({open: this.context.store.getState().sessionActive});
    }

    selectFolder(rowID) {
        var index = parseInt(rowID.replace('FOLDER', ''))
        this.context.store.dispatch({type: 'SELECT_FOLDER', index: index});
        this.context.store.dispatch({type: 'RENDER_MODE'});
        this._navigate(index);
    }

    render() {
        return (
            <LinearGradient colors={['#8bbf9f', '#add2bb', '#cee4d6']} style={styles.linearGradient}>
                <View>
                    <TitleText text='My Folders' />
                    <ListView
                        dataSource={this.state.dataSource}
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
