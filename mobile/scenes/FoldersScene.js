import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    ListView,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class FoldersScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.content.data.notes.folders),
            noteData: this.props.content
        };
    }

    navigate(){
        this.props.navigator.push({
            title: 'View Notes',
            content: arguments[0],
        })
    }

    render() {
        let pic = {
            uri: 'https://openclipart.org/image/300px/svg_to_png/133813/NOTEBOOK.png&disposition=attachment'
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress = {this.navigate.bind(this, rowData)}>
                      <View style={styles.listItem}>
                          <Icon name="folder" size={30} color='#000000' />
                          <Text style={styles.listItemText}>{rowData.name}</Text>
                      </View>
                  </TouchableHighlight>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white',
        marginTop: 4,
        marginBottom: 4,
        marginRight: 8,
        marginLeft: 8,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        padding: 20,
        borderRadius: 5
    },
    listItemText: {
        marginLeft: 20
    }
});
