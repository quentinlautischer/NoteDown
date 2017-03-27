import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';

import NotesViewScene from './NotesViewScene'; // navigate

export default class FoldersScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.content.data.notes.folders),
            noteData: this.props.content
        };
    }

    _navigate(rowID) {
        this.props.navigator.push({
            title: 'NotesViewScene',
            component: NotesViewScene,
            passProps: {
                folderId: parseInt(rowID.replace('FOLDER', '')),
                content: this.props.content,
                socket: this.props.socket
            }
        });
    }

    render() {
        return (
            <LinearGradient colors={['#0aaf82', '#0dd9a2', '#26f2bc']} style={styles.linearGradient}>
                <View>
                    <TitleText text='My Folders'/>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>
                            <TouchableHighlight onPress = { () => this._navigate(rowID) }>
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
